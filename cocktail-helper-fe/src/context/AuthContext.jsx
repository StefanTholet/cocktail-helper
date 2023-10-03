import { createContext, useReducer, useEffect } from 'react'
import axios from 'axios'

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
            cocktails: [...(state.cocktails || []), action.payload],
          },
        },
      }
    default:
      return state
  }
}

export const AuthContextProvider = ({ children }) => {
  const savedUser = JSON.parse(localStorage.getItem('user'))
  const [state, dispatch] = useReducer(authReducer, { user: savedUser || null })

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await axios.get('http://localhost:3000/user/get-user', {
          params: { email: savedUser.email },
        })
        if (user.status === 200) {
          dispatch({ type: 'LOGIN', payload: user.data })
        }
      } catch (error) {
        console.log(error)
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
