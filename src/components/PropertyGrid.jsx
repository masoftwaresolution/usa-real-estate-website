import { SearchX } from 'lucide-react'
import PropertyCard from './PropertyCard'

export default function PropertyGrid({ properties, onReset }) {
  if (!properties.length) {
    return (
      <div className="rounded-2xl bg-white p-12 text-center shadow-sm ring-1 ring-navy/5">
        <SearchX className="mx-auto text-gold-dark" size={40} aria-hidden="true" />
        <h3 className="mt-4 text-xl font-semibold">No properties match your search</h3>
        <p className="mt-2 text-sm text-ink/70">Try widening your filters to see more demo listings.</p>
        {onReset && <button type="button" onClick={onReset} className="btn btn-navy mt-6">Reset Filters</button>}
      </div>
    )
  }
  return (
    <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-3">
      {properties.map((p, i) => <PropertyCard key={p.id} property={p} index={i} />)}
    </div>
  )
}
