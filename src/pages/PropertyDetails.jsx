import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Bath, BedDouble, Check, ChevronLeft, ChevronRight, MapPin, Maximize } from 'lucide-react'
import useDocumentMeta from '../hooks/useDocumentMeta'
import SmartImage from '../components/SmartImage'
import ContactForm from '../components/ContactForm'
import PropertyGrid from '../components/PropertyGrid'
import SectionHeading from '../components/SectionHeading'
import NotFound from './NotFound'
import { formatPrice, getProperty, properties } from '../data/properties'
import { resize } from '../data/images'

export default function PropertyDetails() {
  const { id } = useParams()
  const p = getProperty(id)
  const [index, setIndex] = useState(0)

  useDocumentMeta(p ? p.title : 'Property Not Found', p ? `${p.title} — ${p.beds} bed, ${p.baths} bath, ${p.sqft.toLocaleString()} sq ft in ${p.city}, ${p.state}. Demo listing.` : undefined)
  if (!p) return <NotFound />

  const go = (d) => setIndex((i) => (i + d + p.images.length) % p.images.length)
  const similar = properties.filter((x) => x.id !== p.id && (x.type === p.type || x.city === p.city)).slice(0, 3)
  const overview = [
    ['Property Type', p.type], ['Year Built', p.yearBuilt], ['Lot Size', p.lot], ['Parking', p.garage], ['Listing ID', p.id.toUpperCase().slice(0, 8)], ['Status', 'Demo Listing'],
  ]

  return (
    <>
      <div className="container-x pt-8">
        <Link to="/properties" className="inline-flex items-center gap-2 text-sm font-medium text-navy hover:text-gold-dark"><ArrowLeft size={16} aria-hidden="true" /> Back to properties</Link>
      </div>

      <section className="container-x py-8">
        <div className="relative overflow-hidden rounded-2xl bg-navy shadow-xl">
          <SmartImage key={p.images[index]} src={p.images[index]} alt={`${p.title} — photo ${index + 1} of ${p.images.length}`} eager className="aspect-[16/10] w-full sm:aspect-[16/9]" />
          <button type="button" onClick={() => go(-1)} aria-label="Previous photo" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2.5 text-navy shadow hover:bg-white"><ChevronLeft size={22} /></button>
          <button type="button" onClick={() => go(1)} aria-label="Next photo" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2.5 text-navy shadow hover:bg-white"><ChevronRight size={22} /></button>
          <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy">Demo Listing</span>
        </div>
        <ul className="mt-4 grid grid-cols-4 gap-3">
          {p.images.map((img, i) => (
            <li key={img}>
              <button type="button" onClick={() => setIndex(i)} aria-label={`Show photo ${i + 1}`} aria-current={i === index} className={`block w-full overflow-hidden rounded-lg ring-2 transition ${i === index ? 'ring-gold' : 'ring-transparent opacity-70 hover:opacity-100'}`}>
                <SmartImage src={resize(img, 320)} alt="" className="aspect-[4/3] w-full" />
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-x grid gap-10 pb-20 lg:grid-cols-[1fr_380px]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-dark">{p.type}</p>
          <h1 className="mt-2 text-3xl font-semibold sm:text-4xl">{p.title}</h1>
          <p className="mt-2 flex items-center gap-2 text-ink/75"><MapPin size={17} className="text-gold-dark" aria-hidden="true" />{p.address}, {p.city}, {p.state}</p>
          <p className="mt-5 font-serif text-4xl font-semibold text-navy">{formatPrice(p.price)}</p>

          <ul className="mt-6 grid grid-cols-3 gap-3 rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-navy/5">
            <li><BedDouble className="mx-auto text-gold-dark" size={22} aria-hidden="true" /><p className="mt-1 font-semibold text-navy">{p.beds}</p><p className="text-xs text-ink/60">Bedrooms</p></li>
            <li><Bath className="mx-auto text-gold-dark" size={22} aria-hidden="true" /><p className="mt-1 font-semibold text-navy">{p.baths}</p><p className="text-xs text-ink/60">Bathrooms</p></li>
            <li><Maximize className="mx-auto text-gold-dark" size={22} aria-hidden="true" /><p className="mt-1 font-semibold text-navy">{p.sqft.toLocaleString()}</p><p className="text-xs text-ink/60">Sq Ft</p></li>
          </ul>

          <h2 className="mt-10 text-2xl font-semibold">Description</h2>
          <p className="mt-3 leading-relaxed text-ink/80">{p.description}</p>

          <h2 className="mt-10 text-2xl font-semibold">Property Overview</h2>
          <dl className="mt-4 grid gap-px overflow-hidden rounded-2xl bg-navy/10 ring-1 ring-navy/10 sm:grid-cols-2">
            {overview.map(([k, v]) => (
              <div key={k} className="flex justify-between bg-white px-5 py-3.5 text-sm"><dt className="text-ink/60">{k}</dt><dd className="font-medium text-navy">{v}</dd></div>
            ))}
          </dl>

          <h2 className="mt-10 text-2xl font-semibold">Features</h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {p.features.map((f) => <li key={f} className="flex items-center gap-2.5 text-sm"><Check size={17} className="shrink-0 text-gold-dark" aria-hidden="true" />{f}</li>)}
          </ul>
        </div>

        <aside className="lg:sticky lg:top-28 lg:self-start" aria-label="Contact agent">
          <h2 className="mb-4 text-2xl font-semibold">Contact an Agent</h2>
          <ContactForm key={p.id} variant="property" context={{ propertyId: p.id }} defaultMessage={`I'm interested in ${p.title} (${p.address}, ${p.city}, ${p.state}). Please send me more information.`} submitLabel="Request Information" />
        </aside>
      </section>

      {similar.length > 0 && (
        <section className="bg-white py-20">
          <div className="container-x">
            <SectionHeading eyebrow="You May Also Like" title="Similar Properties" />
            <PropertyGrid properties={similar} />
          </div>
        </section>
      )}
    </>
  )
}
