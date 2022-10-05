import { useEffect } from 'react'

export default function useSEO({ description, title }) {
  useEffect(() => {
    if (title) {
      document.title = `${title} | IAF`
    }
  }, [title])

  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]')
    if (description) {
      metaDescription.setAttribute('content', description)
    }
  }, [description])
}