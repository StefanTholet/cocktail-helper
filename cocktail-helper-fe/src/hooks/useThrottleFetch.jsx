import { useEffect, useState } from 'react'
import axios from 'axios'

const useFetchSearch = (body, url) => {
  const [res, setRes] = useState(null)
  const [throttleTimeout, setThrottleTimeout] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const fetchSearch = async () => {
    try {
      const result = await axios.get(url, {
        params: body
      })
      if (!result.data) {
        setRes(null)
        return
      }

      setRes(result.data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (body?.search) {
      setIsLoading(true)
      if (throttleTimeout) {
        clearTimeout(throttleTimeout)
      }
      // Set a new timeout to call the throttled fetch function after 500 milliseconds
      const newTimeout = setTimeout(() => {
        fetchSearch()
      }, 500)

      setThrottleTimeout(newTimeout)
    } else {
      setRes(null)
    }
  }, [body])

  return [res, isLoading]
}

export default useFetchSearch
