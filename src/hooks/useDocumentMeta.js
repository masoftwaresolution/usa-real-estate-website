import { useEffect } from 'react'

const SUFFIX = 'USA REAL ESTATE TEAM at LPT Realty'

/** Sets the page <title> and meta description for each route. */
export default function useDocumentMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${SUFFIX}` : SUFFIX
    let tag = document.querySelector('meta[name="description"]')
    if (!tag) {
      tag = document.createElement('meta')
      tag.name = 'description'
      document.head.appendChild(tag)
    }
    if (description) tag.setAttribute('content', description)
  }, [title, description])
}
