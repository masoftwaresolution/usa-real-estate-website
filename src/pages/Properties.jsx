import { useMemo, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import useDocumentMeta from '../hooks/useDocumentMeta'
import PageHeader from '../components/PageHeader'
import PropertySearch from '../components/PropertySearch'
import PropertyGrid from '../components/PropertyGrid'
import { filterProperties, properties, sortProperties } from '../data/properties'

const KEYS = ['location', 'type', 'price', 'beds']

export default function Properties() {
  useDocumentMeta('Properties', 'Browse sample demo property listings — filter by location, type, price and bedrooms, and sort by price.')
  const [params, setParams] = useSearchParams()
  const resultsRef = useRef(null)

  const filters = Object.fromEntries(KEYS.map((k) => [k, params.get(k) || '']))
  const sort = params.get('sort') || 'featured'

  const update = (nextFilters, nextSort = sort) => {
    const p = new URLSearchParams()
    KEYS.forEach((k) => nextFilters[k] && p.set(k, nextFilters[k]))
    if (nextSort !== 'featured') p.set('sort', nextSort)
    setParams(p, { replace: true })
  }
  const setFilters = (updater) => update(typeof updater === 'function' ? updater(filters) : updater)

  const results = useMemo(
    () => sortProperties(filterProperties(properties, filters), sort),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [params],
  )
  const hasFilters = KEYS.some((k) => filters[k])

  return (
    <>
      <PageHeader title="Properties" subtitle="Browse sample demo listings. These are not real LPT Realty listings." crumbs={[{ label: 'Properties' }]} />
      <section className="py-12 sm:py-16">
        <div className="container-x">
          <PropertySearch
            filters={filters}
            setFilters={setFilters}
            onSubmit={() => resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            buttonLabel="Search"
            className="-mt-24 mb-10 relative z-10"
          />
          <div ref={resultsRef} className="mb-8 flex scroll-mt-28 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-ink/80" aria-live="polite">
              Showing <strong className="text-navy">{results.length}</strong> of {properties.length} demo properties
            </p>
            <div className="flex items-center gap-3">
              {hasFilters && <button type="button" onClick={() => update({ location: '', type: '', price: '', beds: '' })} className="text-sm font-medium text-gold-dark underline underline-offset-4">Reset filters</button>}
              <label htmlFor="sort" className="text-sm font-medium text-navy">Sort by</label>
              <select id="sort" value={sort} onChange={(e) => update(filters, e.target.value)} className="input !w-auto !py-2">
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>
          <PropertyGrid properties={results} onReset={() => update({ location: '', type: '', price: '', beds: '' })} />
        </div>
      </section>
    </>
  )
}
