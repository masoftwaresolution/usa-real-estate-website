import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import Brand from './Brand'
import { CONTACT, DISCLAIMER, NAV, SOCIALS } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-navy text-white/75">
      <div className="container-x grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Brand />
          <p className="mt-5 text-sm leading-relaxed">Helping buyers and sellers move forward with clarity, care and local expertise.</p>
          <ul className="mt-5 flex gap-3">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-gold hover:text-gold">
                  <s.icon size={18} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Footer">
          <h3 className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest !text-gold">Explore</h3>
          <ul className="space-y-2.5 text-sm">
            {[...NAV, { to: '/contact', label: 'Contact' }].map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-gold">{n.label}</Link></li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest !text-gold">Services</h3>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/buy" className="hover:text-gold">Buy a Home</Link></li>
            <li><Link to="/sell" className="hover:text-gold">Sell Your Home</Link></li>
            <li><Link to="/properties" className="hover:text-gold">Browse Properties</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Request a Consultation</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 font-sans text-sm font-semibold uppercase tracking-widest !text-gold">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><Phone size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />{CONTACT.phone}</li>
            <li className="flex gap-3"><Mail size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />{CONTACT.email}</li>
            <li className="flex gap-3"><MapPin size={16} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />{CONTACT.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-6 text-xs leading-relaxed text-white/50">
          <p>© {new Date().getFullYear()} USA REAL ESTATE TEAM AT LPT REALTY. All rights reserved.</p>
          <p className="mt-1">{DISCLAIMER}</p>
        </div>
      </div>
    </footer>
  )
}
