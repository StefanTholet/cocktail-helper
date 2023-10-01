import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/layout'
import { Spinner } from 'react-bootstrap'

const Home = lazy(() => import('./pages/home/home'))
const Auth = lazy(() => import('./pages/auth/auth'))
const Dashboard = lazy(() => import('./pages/dashboard/dashboard'))

function App() {
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/sign-up" element={<Auth />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
