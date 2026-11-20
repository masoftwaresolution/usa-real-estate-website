// Usage: npm run verify:images  (Node 18+, needs internet)
// HTTP-checks every Unsplash image URL used in src/data and reports any that fail.
import { readFileSync } from 'node:fs'

const read = (f) => readFileSync(new URL(`../src/data/${f}`, import.meta.url), 'utf8')
const src = ['images.js', 'content.js', 'properties.js'].map(read).join('\n')
const ids = [...new Set([...src.matchAll(/photo-[0-9]+-[0-9a-f]+/g)].map((m) => m[0]))]

let bad = 0
for (const id of ids) {
  const url = `https://images.unsplash.com/${id}?auto=format&fit=crop&w=400&q=60`
  try {
    const res = await fetch(url, { method: 'HEAD' })
    const ok = res.ok && (res.headers.get('content-type') || '').startsWith('image/')
    console.log(ok ? 'OK    ' : 'FAIL  ', res.status, id)
    if (!ok) bad++
  } catch (e) {
    console.log('ERROR ', id, e.message)
    bad++
  }
}
console.log(`\n${ids.length - bad}/${ids.length} images OK`)
process.exit(bad ? 1 : 0)
