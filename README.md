# USA REAL ESTATE TEAM — AT LPT REALTY (Website Concept)

React + Vite + Tailwind CSS + React Router + Framer Motion + Lucide + React Hook Form.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build -> dist/
npm run preview
```

## Edit content
- `src/data/site.js` — business info placeholders, nav, social links, filter options
- `src/data/properties.js` — all demo listings (add/edit objects here)
- `src/data/content.js` — services, testimonials, team, neighborhoods, process steps, hero/section images

## Forms
Forms validate on the frontend and show success/error states, but **no email is sent**.
Replace `src/utils/submitInquiry.js` with EmailJS, Formspree, or your own backend/serverless endpoint.

## Images
All photos are Unsplash (free under the Unsplash License) and live in `src/data/images.js`.
- 3 were opened and checked individually (exterior/hero, kitchen, bedroom) and are marked VERIFIED there.
- The rest are UNVERIFIED IDs. Run `npm run verify:images` (needs internet) to HTTP-check every URL, then swap any that fail.
- If an image ever fails to load, the UI shows a labeled "Image placeholder" tile instead of a broken icon.
- Team photos are intentionally placeholders; add a `photo` URL per member in `src/data/content.js`.

## Notes
- Listing, team and testimonial content is placeholder/demo data.
- Images load from Unsplash URLs; a fallback appears if one fails. Swap any URL in the data files.
- Hosting: SPA routes need an index.html fallback (`vercel.json` included).
- Not affiliated with or approved by LPT Realty.
