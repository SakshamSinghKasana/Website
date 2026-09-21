import { NavProvider, useNav } from "./router"
import HomePage from "./pages/HomePage"
import CategoryPage from "./pages/CategoryPage"
import BlogPage from "./pages/BlogPage"

function Router() {
  const { route } = useNav()
  if (route.categoryId && route.postId)
    return <BlogPage categoryId={route.categoryId} postId={route.postId} />
  if (route.categoryId) return <CategoryPage categoryId={route.categoryId} />
  return <HomePage />
}

export default function App() {
  return (
    <NavProvider>
      <Router />
    </NavProvider>
  )
}
