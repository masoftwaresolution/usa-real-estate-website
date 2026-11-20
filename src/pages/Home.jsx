import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import useDocumentMeta from '../hooks/useDocumentMeta'
import Hero from '../components/Hero'
import SectionHeading from '../components/SectionHeading'
import PropertyGrid from '../components/PropertyGrid'
import IconCard from '../components/IconCard'
import Reveal from '../components/Reveal'
import SmartImage from '../components/SmartImage'
import Testimonials from '../components/Testimonials'
import CTASection from '../components/CTASection'
import { properties } from '../data/properties'
import { IMAGES, NEIGHBORHOODS, SERVICES, WHY } from '../data/content'

export default function Home() {
  useDocumentMeta('Find Your Place. Discover Your Future.', 'USA REAL ESTATE TEAM at LPT Realty — explore featured homes, neighborhoods and expert guidance for buyers and sellers.')
  const featured = properties.filter((p) => p.featured).slice(0, 6)

  return (
    <>
      <Hero />

      <section className="py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Featured Properties" title="Homes Worth Exploring" subtitle="A selection of sample demo listings showing how your featured properties could look." />
          <PropertyGrid properties={featured} />
          <div className="mt-12 text-center"><Link to="/properties" className="btn btn-navy">View All Properties <ArrowRight size={18} aria-hidden="true" /></Link></div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SmartImage src={IMAGES.about} alt="Beautiful modern home exterior" className="aspect-[4/3] w-full rounded-2xl shadow-xl" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">About the Team</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">Real Estate Guidance That Feels Personal</h2>
            <p className="mt-5 leading-relaxed text-ink/80">USA REAL ESTATE TEAM at LPT Realty is a client-focused team built around trust, communication and results. Whether you are buying your first home or selling a long-held property, we bring a thoughtful strategy to every move.</p>
            <p className="mt-4 leading-relaxed text-ink/80">Replace this introduction with the team's real story, service areas and experience.</p>
            <Link to="/about" className="btn btn-navy mt-8">Meet the Team <ArrowRight size={18} aria-hidden="true" /></Link>
          </Reveal>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Our Services" title="Everything You Need, Under One Roof" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => <IconCard key={s.title} {...s} delay={i * 0.06} />)}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Why Choose Us" title="A Smarter Way to Buy and Sell" light />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w, i) => <IconCard key={w.title} {...w} dark delay={i * 0.07} />)}
          </div>
          <ul className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/80">
            {['Transparent process', 'Responsive support', 'Local expertise', 'Client-first approach'].map((t) => (
              <li key={t} className="flex items-center gap-2"><Check size={16} className="text-gold" aria-hidden="true" />{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Featured Neighborhoods" title="Explore Communities We Love" subtitle="Sample areas shown with demo listings — update to match your real service areas." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {NEIGHBORHOODS.map((n, i) => {
              const count = properties.filter((p) => `${p.city}, ${p.state}` === n.location).length
              return (
                <Reveal key={n.name} delay={i * 0.07} className="h-full">
                  <Link to={`/properties?location=${encodeURIComponent(n.location)}`} className="group relative block aspect-[3/4] overflow-hidden rounded-2xl">
                    <SmartImage src={n.image} alt={`${n.name} neighborhood homes`} className="h-full w-full transition duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent" aria-hidden="true" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="text-2xl font-semibold !text-white">{n.name}</h3>
                      <p className="mt-1 text-sm text-white/80">{n.blurb}</p>
                      <p className="mt-2 text-xs font-semibold uppercase tracking-widest text-gold">{count} demo {count === 1 ? 'listing' : 'listings'}</p>
                    </div>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTASection />
    </>
  )
}
