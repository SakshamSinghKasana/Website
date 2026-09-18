// Pure React-state router — no external dependencies, works in any iframe.
import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

export interface Route {
  categoryId?: string
  postId?: string
}

interface NavCtx {
  route: Route
  navigate: (categoryId?: string, postId?: string) => void
}

const Ctx = createContext<NavCtx>({ route: {}, navigate: () => {} })

export function NavProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState<Route>({})
  const navigate = useCallback((categoryId?: string, postId?: string) => {
    setRoute({ categoryId, postId })
    window.scrollTo(0, 0)
  }, [])
  return <Ctx.Provider value={{ route, navigate }}>{children}</Ctx.Provider>
}

export function useNav() {
  return useContext(Ctx)
}
