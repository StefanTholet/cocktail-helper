import { createContext, useReducer, useEffect } from 'react'
import axios from 'axios'

export const AuthContext = createContext()

export const authReducer = (state, action) => {
  console.log(action.payload)
  switch (action.type) {
    case 'LOGIN':
    case 'UPDATE_USER':
      return { user: { ...state, ...action.payload } }
    case 'LOGOUT':
      return { user: null }
    // case 'ADD_FAVORITE':
    //   return {
    //     ...state,
    //     user: {
    //       ...state.user,
    //       favorites: [...(state.user.favorites || []), action.payload],
    //     },
    //   }
    // case 'REMOVE_FAVORITE':
    //   return {
    //     ...state,
    //     user: {
    //       ...state.user,
    //       favorites: [...action.payload.favorites],
    //       favoriteCocktails: [
    //         ...(action.payload.favorites.filter((x) =>
    //           state.user.favoriteCocktails.includes(x)
    //         ) || []),
    //       ],
    //     },
    //   }
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
