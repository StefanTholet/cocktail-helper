import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetchSearch = (body) => {
  const [res, setRes] = useState(null)
  const [throttleTimeout, setThrottleTimeout] = useState(null)

  const fetchSearch = async () => {
    try {
      const result = await axios.get('http://localhost:3000/search', {
        params: body,
      })
      if (result.data) {
        setRes(result.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (body?.search) {
      if (throttleTimeout) {
        clearTimeout(throttleTimeout)
      }
      // Set a new timeout to call the throttled fetch function after 500 milliseconds
      const newTimeout = setTimeout(() => {
        fetchSearch()
      }, 500)

      setThrottleTimeout(newTimeout)
    }
  }, [body])

  return res
}

export default useFetchSearch
