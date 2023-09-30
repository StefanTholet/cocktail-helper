import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/layout'
import { Spinner } from 'react-bootstrap'

const Home = lazy(() => import('./pages/home/home'))
const Auth = lazy(() => import('./pages/auth/auth'))

function App() {
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/sign-up" element={<Auth />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
