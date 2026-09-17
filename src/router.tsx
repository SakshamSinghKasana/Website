import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

export interface Route {
  categoryId?: string
  blogId?: string
}

interface NavCtx {
  route: Route
  navigate: (categoryId?: string, blogId?: string) => void
}

const Ctx = createContext<NavCtx>({ route: {}, navigate: () => {} })

export function NavProvider({ children }: { children: ReactNode }) {
  const [route, setRoute] = useState<Route>({})
  const navigate = useCallback((categoryId?: string, blogId?: string) => {
    setRoute({ categoryId, blogId })
  }, [])
  return <Ctx.Provider value={{ route, navigate }}>{children}</Ctx.Provider>
}

export function useNav() {
  return useContext(Ctx)
}
