import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'

export default function MainLayout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#main" className="sr-only z-[60] rounded bg-gold px-4 py-2 font-semibold text-navy focus:not-sr-only focus:fixed focus:left-4 focus:top-4">
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        <motion.div key={pathname} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
          <Suspense fallback={<div className="grid min-h-[60vh] place-items-center text-ink/60">Loading…</div>}>
            <Outlet />
          </Suspense>
        </motion.div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
