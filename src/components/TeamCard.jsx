import { Link } from 'react-router-dom'
import { User } from 'lucide-react'
import Reveal from './Reveal'
import SmartImage from './SmartImage'

export default function TeamCard({ member, index = 0, showBio = true }) {
  return (
    <Reveal delay={index * 0.07} className="h-full">
      <div className="flex h-full flex-col items-center rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-navy/5 transition hover:-translate-y-1 hover:shadow-lg">
        {member.photo ? (
          <SmartImage src={member.photo} alt={`Portrait of ${member.name}`} className="h-28 w-28 rounded-full ring-4 ring-gold/40" />
        ) : (
          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-navy text-gold ring-4 ring-gold/40" role="img" aria-label="Profile photo placeholder">
            <User size={44} aria-hidden="true" />
          </div>
        )}
        <h3 className="mt-5 text-xl font-semibold">{member.name}</h3>
        <p className="mt-1 text-sm font-medium text-gold-dark">{member.role}</p>
        {showBio && <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{member.bio}</p>}
        <Link to={`/contact?agent=${encodeURIComponent(member.name)}`} className="btn btn-outline mt-6">Contact {member.name.split(' ')[0]}</Link>
      </div>
    </Reveal>
  )
}
