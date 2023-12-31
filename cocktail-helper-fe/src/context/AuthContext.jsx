import { createContext, useReducer, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../axiosInstance/axiosInstance'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
    case 'UPDATE_USER':
      return { user: { ...state.user, ...action.payload } }
    case 'LOGOUT':
      return { user: null }
    case 'ADD_COCKTAIL':
      return {
        user: {
          ...state,
          user: {
            ...state.user,
            cocktails: [...(state.cocktails || []), action.payload]
          }
        }
      }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const savedUser = JSON.parse(localStorage.getItem('user'))
  const [state, dispatch] = useReducer(authReducer, { user: savedUser || null })

  const navigate = useNavigate()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await axiosInstance.get('/user/get-user', {
          params: { email: savedUser.email }
        })
        if (user.status === 200) {
          dispatch({ type: 'LOGIN', payload: user.data })
        }
      } catch (error) {
        console.log(error)
        if (error.response.status === 401) {
          localStorage.removeItem('user')
          navigate('/login')
        }
      }
    }
    if (savedUser) {
      fetchUser()
    }
  }, [])

  console.log('AuthContext state: ', state)

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
