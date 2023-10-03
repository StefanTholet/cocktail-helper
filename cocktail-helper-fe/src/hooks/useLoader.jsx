import { useState } from 'react'
import Spinner from '../components/spinner/spinner'

const useLoader = (initialState) => {
  const [isLoading, setIsLoading] = useState(
    initialState !== undefined ? initialState : true
  )

  return { isLoading, setIsLoading, Spinner }
}

export default useLoader
