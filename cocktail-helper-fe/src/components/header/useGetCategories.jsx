import { useState, useEffect } from 'react'
import axiosInstance from '../../axiosInstance/axiosInstance'

const useGetCategories = () => {
  const [categories, setCategories] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axiosInstance.get('/api/categories')
        if (result.data) {
          setCategories(result.data)
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
