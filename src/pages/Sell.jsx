import useDocumentMeta from '../hooks/useDocumentMeta'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import ProcessSteps from '../components/ProcessSteps'
import IconCard from '../components/IconCard'
import ContactForm from '../components/ContactForm'
import Reveal from '../components/Reveal'
import SmartImage from '../components/SmartImage'
import CTASection from '../components/CTASection'
import { IMAGES, MARKETING, SELL_STEPS } from '../data/content'

export default function Sell() {
  useDocumentMeta('Sell Your Home', 'Discover our home selling process, marketing strategy and professional photography, then request a consultation.')
  return (
    <>
      <PageHeader title="Sell Your Home" subtitle="A strategic, polished approach to getting your home sold." crumbs={[{ label: 'Sell Your Home' }]} />

      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="The Process" title="Your Home Selling Journey" />
          <ProcessSteps steps={SELL_STEPS} />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Property Valuation</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">Know What Your Home Is Worth</h2>
            <p className="mt-5 leading-relaxed text-ink/80">A strong price starts with market data. We review recent comparable sales, your home's condition and local demand to recommend a pricing strategy. Request a consultation below to begin.</p>
          </Reveal>
          <Reveal delay={0.1}><SmartImage src={IMAGES.sell} alt="Luxury home ready for sale" className="aspect-[4/3] w-full rounded-2xl shadow-xl" /></Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Marketing Strategy" title="Getting Your Home Seen" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{MARKETING.map((m, i) => <IconCard key={m.title} {...m} delay={i * 0.07} />)}</div>
        </div>
      </section>

      <section className="bg-navy py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal><SmartImage src={IMAGES.photography} alt="Bright, beautifully staged living room" className="aspect-[4/3] w-full rounded-2xl" /></Reveal>
          <Reveal delay={0.1}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Professional Photography</p>
            <h2 className="text-3xl font-semibold !text-white sm:text-4xl">First Impressions Happen Online</h2>
            <p className="mt-5 leading-relaxed text-white/75">Most buyers meet your home through photos first. Professional photography and thoughtful staging help your listing stand out and attract more qualified interest.</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Seller Inquiry</p>
            <h2 className="text-3xl font-semibold">Request a Consultation</h2>
            <p className="mt-4 leading-relaxed text-ink/75">Tell us about your property and timeline and we'll reach out to schedule a conversation.</p>
          </Reveal>
          <ContactForm variant="sell" submitLabel="Request Consultation" />
        </div>
      </section>
      <CTASection title="Ready to Sell With Confidence?" primary={{ to: '/contact', label: 'Request a Consultation' }} secondary={null} />
    </>
  )
}
