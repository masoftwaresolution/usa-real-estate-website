import useDocumentMeta from '../hooks/useDocumentMeta'
import PageHeader from '../components/PageHeader'
import SectionHeading from '../components/SectionHeading'
import TeamCard from '../components/TeamCard'
import CTASection from '../components/CTASection'
import { TEAM } from '../data/content'

export default function Team() {
  useDocumentMeta('Our Team', 'Meet the agents of USA REAL ESTATE TEAM at LPT Realty. Placeholder profiles for the redesign concept.')
  return (
    <>
      <PageHeader title="Our Team" subtitle="Dedicated professionals committed to your real estate goals." crumbs={[{ label: 'Our Team' }]} />
      <section className="py-20">
        <div className="container-x">
          <SectionHeading eyebrow="Our Agents" title="Meet Your Real Estate Team" subtitle="Names, roles and photos below are editable placeholders. Edit them in src/data/content.js." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{TEAM.map((m, i) => <TeamCard key={m.name} member={m} index={i} />)}</div>
        </div>
      </section>
      <CTASection title="Want to Work With Us?" secondary={null} />
    </>
  )
}
