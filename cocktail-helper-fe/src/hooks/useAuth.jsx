import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import axios from 'axios'
import { FORM_SUBMIT_MAPPER } from '../pages/auth/authConstants'

const useAuth = (location) => {
  const [error, setError] = useState(null)
  const { dispatch } = useContext(AuthContext)

  const navigate = useNavigate()

  const formSubmit = async (e, body) => {
    try {
      setError(null)
      e.preventDefault()

      const result = await axios.post(
        `http://localhost:3000/user/${FORM_SUBMIT_MAPPER[location]}`,
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
