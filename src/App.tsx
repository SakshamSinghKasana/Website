import { useRoute } from './router'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import BlogPage from './pages/BlogPage'

export default function App() {
  const route = useRoute()

  if (route.categoryId && route.blogId) {
    return <BlogPage categoryId={route.categoryId} blogId={route.blogId} />
  }
  if (route.categoryId) {
    return <CategoryPage categoryId={route.categoryId} />
  }
  return <HomePage />
}
