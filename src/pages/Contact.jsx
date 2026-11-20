import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { useSearchParams } from 'react-router-dom'
import useDocumentMeta from '../hooks/useDocumentMeta'
import PageHeader from '../components/PageHeader'
import ContactForm from '../components/ContactForm'
import Reveal from '../components/Reveal'
import { CONTACT, SOCIALS } from '../data/site'

export default function Contact() {
  useDocumentMeta('Contact', 'Contact USA REAL ESTATE TEAM at LPT Realty to buy, sell or ask a question.')
  const [params] = useSearchParams()
  const agent = params.get('agent')
  const info = [
    { icon: Phone, label: 'Phone', value: CONTACT.phone },
    { icon: Mail, label: 'Email', value: CONTACT.email },
    { icon: MapPin, label: 'Office', value: CONTACT.address },
    { icon: Clock, label: 'Hours', value: CONTACT.hours },
  ]
  return (
    <>
      <PageHeader title="Contact Us" subtitle="Tell us how we can help — we'd love to hear from you." crumbs={[{ label: 'Contact' }]} />
      <section className="py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="mb-2 text-3xl font-semibold">Send Us a Message</h2>
            <p className="mb-6 text-ink/75">Whether you're buying, selling or just exploring, reach out and a team member will respond.</p>
            <ContactForm key={agent || 'general'} variant="contact" defaultMessage={agent ? `Hello, I'd like to speak with ${agent}.` : ''} />
          </div>
          <Reveal>
            <aside className="space-y-6">
              <div className="rounded-2xl bg-navy p-8 text-white/80">
                <h2 className="text-2xl font-semibold !text-white">Business Information</h2>
                <ul className="mt-5 space-y-4 text-sm">
                  {info.map((i) => (
                    <li key={i.label} className="flex gap-3"><i.icon size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" /><span><span className="block text-xs uppercase tracking-widest text-white/50">{i.label}</span>{i.value}</span></li>
                  ))}
                </ul>
                <h3 className="mt-8 font-sans text-sm font-semibold uppercase tracking-widest !text-gold">Follow Us</h3>
                <ul className="mt-3 flex gap-3">
                  {SOCIALS.map((s) => (
                    <li key={s.label}><a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 hover:border-gold hover:text-gold"><s.icon size={18} aria-hidden="true" /></a></li>
                  ))}
                </ul>
              </div>
              <div role="img" aria-label="Map placeholder" className="grid aspect-[4/3] place-items-center rounded-2xl border-2 border-dashed border-navy/20 bg-white text-center">
                <div className="px-6">
                  <MapPin className="mx-auto text-gold-dark" size={36} aria-hidden="true" />
                  <p className="mt-3 font-semibold text-navy">Map Location Placeholder</p>
                  <p className="mt-1 text-sm text-ink/60">Embed a Google Maps iframe here once the office address is confirmed.</p>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  )
}
