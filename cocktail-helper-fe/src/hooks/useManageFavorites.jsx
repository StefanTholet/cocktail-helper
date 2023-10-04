import axiosInstance from '../axiosInstance/axiosInstance'
import { useNavigate } from 'react-router-dom'
import useAuthContext from './useAuthContext'

const useManageFavorites = () => {
  const { user, dispatch } = useAuthContext()
  const navigate = useNavigate()

  const manageFavorites = async (cocktailId, url) => {
    try {
      if (!user || !cocktailId) {
        return
      }

      const result = await axiosInstance.post(
        `/user/${url}`,
        {
          email: user.email,
          cocktailId
        },
        { headers: { Authorization: `Bearer ${user?.token}` } }
      )
      if (result.status === 200) {
        dispatch({ type: 'UPDATE_USER', payload: result.data })
      }
    } catch (error) {
      console.log(error)
      if (error.response.status === 401) {
        localStorage.removeItem('user')
        navigate('/login')
      }
    }
  }

  return manageFavorites
}

export default useManageFavorites
