import { Compass, Eye, Target } from 'lucide-react'
import useDocumentMeta from '../hooks/useDocumentMeta'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import IconCard from '../components/IconCard'
import Reveal from '../components/Reveal'
import SmartImage from '../components/SmartImage'
import TeamCard from '../components/TeamCard'
import CTASection from '../components/CTASection'
import { IMAGES, TEAM, WHY } from '../data/content'

const PILLARS = [
  { icon: Target, title: 'Our Mission', text: 'To guide every client through a confident, well-informed real estate experience built on honesty and care. (Editable placeholder.)' },
  { icon: Eye, title: 'Our Vision', text: 'To be the trusted real estate partner families and investors recommend to the people they care about. (Editable placeholder.)' },
  { icon: Compass, title: 'Our Approach', text: 'Listen first, plan carefully, communicate clearly and follow through — from the first call to closing day. (Editable placeholder.)' },
]

export default function About() {
  useDocumentMeta('About Us', 'Learn about USA REAL ESTATE TEAM at LPT Realty — our mission, vision, approach and what it is like to work with us.')
  return (
    <>
      <PageHeader title="About Our Team" subtitle="A client-first real estate team focused on trust, communication and results." crumbs={[{ label: 'About' }]} />

      <section className="py-20">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold">Who We Are</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">Experienced Guidance, Personal Attention</h2>
            <p className="mt-5 leading-relaxed text-ink/80">USA REAL ESTATE TEAM at LPT Realty helps people buy, sell and invest with clarity. This introduction is placeholder copy — replace it with the team's real history, service areas and values.</p>
            <p className="mt-4 leading-relaxed text-ink/80">We believe real estate is about people first: understanding what you need, then building a plan that gets you there.</p>
          </Reveal>
          <Reveal delay={0.1}><SmartImage src={IMAGES.about} alt="Modern residential home exterior" className="aspect-[4/3] w-full rounded-2xl shadow-xl" /></Reveal>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {PILLARS.map((p, i) => <IconCard key={p.title} {...p} delay={i * 0.08} />)}
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Why Work With Us" title="What You Can Expect" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{WHY.map((w, i) => <IconCard key={w.title} {...w} delay={i * 0.07} />)}</div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Meet the Team" title="The People Behind Your Move" subtitle="Placeholder profiles — replace with real team members." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{TEAM.map((m, i) => <TeamCard key={m.name} member={m} index={i} showBio={false} />)}</div>
        </div>
      </section>
      <CTASection />
    </>
  )
}
