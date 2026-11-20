import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Brand from './Brand'
import { NAV } from '../data/site'

const linkCls = ({ isActive }) =>
  `text-sm font-medium tracking-wide transition-colors ${isActive ? 'text-gold' : 'text-white/85 hover:text-gold'}`

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <header className={`sticky top-0 z-50 bg-navy transition-shadow ${scrolled ? 'shadow-lg shadow-black/25' : ''}`}>
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" aria-label="USA Real Estate Team at LPT Realty — home">
          <Brand />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <NavLink key={n.to} to={n.to} end={n.to === '/'} className={linkCls}>{n.label}</NavLink>
          ))}
          <Link to="/contact" className="btn btn-gold !px-5 !py-2.5">Get in Touch</Link>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-white lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-navy lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-4">
              {NAV.map((n) => (
                <NavLink key={n.to} to={n.to} end={n.to === '/'} className={({ isActive }) => `rounded-md px-3 py-3 text-base font-medium ${isActive ? 'bg-white/5 text-gold' : 'text-white/85'}`}>
                  {n.label}
                </NavLink>
              ))}
              <Link to="/contact" className="btn btn-gold mt-3">Get in Touch</Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
