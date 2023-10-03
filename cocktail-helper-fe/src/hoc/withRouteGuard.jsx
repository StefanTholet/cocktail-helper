import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useAuthContext from '../hooks/useAuthContext'

const WithRouteGuard = ({ children }) => {
  const { user } = useAuthContext()
  const navigate = useNavigate()
  const [hasRendered, setHasRendered] = useState(false)

  useEffect(() => {
    if (!user) navigate('/login')
    setHasRendered(true)
  }, [user])

  return (
    <div style={{ display: hasRendered ? 'block' : 'none' }}>{children}</div>
  )
}

export default WithRouteGuard
