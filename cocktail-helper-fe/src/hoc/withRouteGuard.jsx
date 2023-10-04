import { useNavigate } from 'react-router-dom'
import useAuthContext from '../hooks/useAuthContext'

const WithRouteGuard = ({ children }) => {
  const { user } = useAuthContext()
  const navigate = useNavigate()

  if (!user) {
    navigate('/login')
    return
  }

  return <>{children}</>
}

export default WithRouteGuard
