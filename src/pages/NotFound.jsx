import { Link } from 'react-router-dom'
import useDocumentMeta from '../hooks/useDocumentMeta'

export default function NotFound() {
  useDocumentMeta('Page Not Found', 'The page you are looking for could not be found.')
  return (
    <section className="container-x grid min-h-[60vh] place-items-center py-20 text-center">
      <div>
        <p className="font-serif text-7xl font-semibold text-gold">404</p>
        <h1 className="mt-4 text-3xl font-semibold">We couldn't find that page</h1>
        <p className="mt-3 text-ink/70">The page may have moved, or the property is no longer in the demo data.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn btn-navy">Back to Home</Link>
          <Link to="/properties" className="btn btn-outline">Browse Properties</Link>
        </div>
      </div>
    </section>
  )
}
