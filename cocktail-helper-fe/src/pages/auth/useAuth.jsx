import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import axiosInstance from '../../axiosInstance/axiosInstance'
import { FORM_SUBMIT_MAPPER } from './authConstants'

const useAuth = (location) => {
  const [error, setError] = useState(null)
  const { dispatch } = useContext(AuthContext)

  const navigate = useNavigate()

  const formSubmit = async (e, body) => {
    try {
      setError(null)
      e.preventDefault()

      const result = await axiosInstance.post(
        `/user/${FORM_SUBMIT_MAPPER[location]}`,
        body
      )
      if (result.status === 200) {
        localStorage.setItem('user', JSON.stringify(result.data))
        dispatch({ type: 'LOGIN', payload: result.data })
        navigate('/')
      }
    } catch (error) {
      setError(error)
    }
  }

  return [formSubmit, error]
}

export default useAuth
