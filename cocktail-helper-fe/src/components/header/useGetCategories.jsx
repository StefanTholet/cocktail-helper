import { useState, useEffect } from 'react'
import axios from 'axios'

const useGetCategories = () => {
  const [categories, setCategories] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:3000/categories')
        if (result.data) {
          setCategories(result.data.categories)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  return categories
}

export default useGetCategories
