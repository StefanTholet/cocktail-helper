import { useEffect, useState } from 'react'
import axios from 'axios'
import Layout from './components/layout/layout'
import SearchSection from './components/searchSection/searchSection'

function App() {
  const [filters, setFilters] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:3000/filters')
        if (result.data) {
          setFilters(result.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  return <Layout>{filters ? <SearchSection filters={filters} /> : null}</Layout>
}

export default App
