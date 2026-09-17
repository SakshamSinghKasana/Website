// Lightweight hash router — no external dependencies.
// URL shape:  #/                    → home
//             #/:categoryId         → category page
//             #/:categoryId/:blogId → blog page

import { useState, useEffect } from 'react'

export interface Route {
  categoryId?: string
  blogId?: string
}

function parseHash(hash: string): Route {
  const path = hash.replace(/^#\/?/, '')
  const parts = path.split('/').filter(Boolean)
  if (parts.length === 0) return {}
  if (parts.length === 1) return { categoryId: parts[0] }
  return { categoryId: parts[0], blogId: parts[1] }
}

function buildHash(categoryId?: string, blogId?: string): string {
  if (!categoryId) return '#/'
  if (!blogId) return `#/${categoryId}`
  return `#/${categoryId}/${blogId}`
}

export function navigate(categoryId?: string, blogId?: string) {
  window.location.hash = buildHash(categoryId, blogId)
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash))

  useEffect(() => {
    const onHashChange = () => setRoute(parseHash(window.location.hash))
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return route
}

export function href(categoryId?: string, blogId?: string): string {
  return buildHash(categoryId, blogId)
}
