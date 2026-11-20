import { Search } from 'lucide-react'
import { BED_OPTIONS, PRICE_RANGES } from '../data/site'
import { LOCATIONS, TYPES } from '../data/properties'

function Field({ id, label, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-navy/70">{label}</label>
      {children}
    </div>
  )
}

export default function PropertySearch({ filters, setFilters, onSubmit, buttonLabel = 'Search', className = '' }) {
  const set = (key) => (e) => setFilters((f) => ({ ...f, [key]: e.target.value }))
  return (
    <form
      role="search"
      aria-label="Property search"
      onSubmit={(e) => { e.preventDefault(); onSubmit?.(filters) }}
      className={`grid gap-4 rounded-2xl bg-white p-5 shadow-xl ring-1 ring-navy/5 sm:grid-cols-2 lg:grid-cols-5 lg:items-end ${className}`}
    >
      <Field id="ps-location" label="Location">
        <select id="ps-location" value={filters.location} onChange={set('location')} className="input">
          <option value="">All Locations</option>
          {LOCATIONS.map((l) => <option key={l} value={l}>{l}</option>)}
        </select>
      </Field>
      <Field id="ps-type" label="Property Type">
        <select id="ps-type" value={filters.type} onChange={set('type')} className="input">
          <option value="">All Types</option>
          {TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </Field>
      <Field id="ps-price" label="Price Range">
        <select id="ps-price" value={filters.price} onChange={set('price')} className="input">
          {PRICE_RANGES.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
        </select>
      </Field>
      <Field id="ps-beds" label="Bedrooms">
        <select id="ps-beds" value={filters.beds} onChange={set('beds')} className="input">
          {BED_OPTIONS.map((b) => <option key={b.value} value={b.value}>{b.label}</option>)}
        </select>
      </Field>
      <button type="submit" className="btn btn-navy w-full sm:col-span-2 lg:col-span-1">
        <Search size={18} aria-hidden="true" /> {buttonLabel}
      </button>
    </form>
  )
}
