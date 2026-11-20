import { Check } from 'lucide-react'
import useDocumentMeta from '../hooks/useDocumentMeta'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import ProcessSteps from '../components/ProcessSteps'
import ContactForm from '../components/ContactForm'
import Reveal from '../components/Reveal'
import SmartImage from '../components/SmartImage'
import CTASection from '../components/CTASection'
import { BUY_STEPS, IMAGES } from '../data/content'

const GUIDANCE = ['Define must-haves vs. nice-to-haves', 'Compare neighborhoods, commutes and schools', 'Set a realistic budget including closing costs', 'Get alerts for new matching listings']
const BENEFITS = ['Dedicated buyer representation', 'Honest, data-informed advice', 'Skilled negotiation on your behalf', 'Support through inspection and closing']

export default function Buy() {
  useDocumentMeta('Buy a Home', 'Learn the home buying process with USA REAL ESTATE TEAM at LPT Realty and send a buyer inquiry.')
  return (
    <>
      <PageHeader title="Buy a Home" subtitle="A clear, supportive path from first search to the day you get your keys." crumbs={[{ label: 'Buy a Home' }]} />

      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="The Process" title="Your Home Buying Journey" />
          <ProcessSteps steps={BUY_STEPS} />
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal><SmartImage src={IMAGES.buy} alt="Charming family home exterior" className="aspect-[4/3] w-full rounded-2xl shadow-xl" /></Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl font-semibold">Property Search Guidance</h2>
            <ul className="mt-5 space-y-3">{GUIDANCE.map((g) => <li key={g} className="flex gap-3"><Check className="mt-0.5 shrink-0 text-gold-dark" size={18} aria-hidden="true" />{g}</li>)}</ul>
            <h2 className="mt-10 text-3xl font-semibold">Benefits of Working With Us</h2>
            <ul className="mt-5 space-y-3">{BENEFITS.map((g) => <li key={g} className="flex gap-3"><Check className="mt-0.5 shrink-0 text-gold-dark" size={18} aria-hidden="true" />{g}</li>)}</ul>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Buyer Inquiry</p>
            <h2 className="text-3xl font-semibold">Tell Us What You're Looking For</h2>
            <p className="mt-4 leading-relaxed text-ink/75">Share your budget and timeline and a team member will follow up with next steps.</p>
          </Reveal>
          <ContactForm variant="buy" submitLabel="Submit Buyer Inquiry" />
        </div>
      </section>
      <CTASection title="Start Your Home Search Today" />
    </>
  )
}
