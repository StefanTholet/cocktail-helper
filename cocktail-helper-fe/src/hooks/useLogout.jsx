import useAuthContext from './useAuthContext'
import { useNavigate } from 'react-router-dom'

const useLogout = () => {
  const navigate = useNavigate()
  const { dispatch } = useAuthContext()
  const logout = () => {
    localStorage.removeItem('user')
    dispatch({ type: 'LOGOUT' })
    navigate('/login')
  }
  return logout
}

export default useLogout
