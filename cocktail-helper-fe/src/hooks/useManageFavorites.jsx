import axios from 'axios'
import useAuthContext from './useAuthContext'

const useManageFavorites = () => {
  const { user, dispatch } = useAuthContext()

  const manageFavorites = async (cocktailId, url) => {
    try {
      if (!user || !cocktailId) {
        return
      }

      const result = await axios.post(`http://localhost:3000/user/${url}`, {
        email: user.email,
        cocktailId,
      })
      if (result.status === 200) {
        dispatch({ type: 'UPDATE_USER', payload: result.data })
      }
    } catch (error) {
      console.log(error)
    }
  }

  return manageFavorites
}

export default useManageFavorites
