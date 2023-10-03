import { useState, useEffect, useMemo } from 'react'
import useAuthContext from '../../hooks/useAuthContext'
import useAddCocktail from '../../hooks/useAddCocktail'
import useManageFavorites from '../../hooks/useManageFavorites'
import useLoader from '../../hooks/useLoader'
import {
  FORM_INITIAL_STATE,
  INGREDIENT_INPUTS_INITIAL_STATE,
} from './dashboardConstants'
import axios from 'axios'

const useDashboard = () => {
  const { isLoading, setIsLoading, Spinner } = useLoader()
  const [showForm, setShowForm] = useState(false)
  const { user, dispatch } = useAuthContext()
  const { values, onChange, onAdd, onRemove, ingredientInputs, submit } =
    useAddCocktail(
      FORM_INITIAL_STATE,
      INGREDIENT_INPUTS_INITIAL_STATE,
      user,
      dispatch
    )

  const manageFavorites = useManageFavorites()

  const favoriteCocktails = useMemo(
    () =>
      user?.favoriteCocktails?.map((x) => {
        x.isFavorite = true
        return x
      }),
    [user?.favoriteCocktails]
  )

  useEffect(() => {
    const fetchUserDashboard = async () => {
      try {
        if (user) {
          const result = await axios.get(
            'http://localhost:3000/user/dashboard',
            {
              params: { email: user.email },
            }
          )

          if (result.data) {
            dispatch({ type: 'UPDATE_USER', payload: result.data })
          }
        }
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    setIsLoading(true)
    fetchUserDashboard()
  }, [])

  return {
    showForm,
    setShowForm,
    values,
    onChange,
    onAdd,
    onRemove,
    ingredientInputs,
    submit,
    manageFavorites,
    favoriteCocktails,
    userCocktails: user?.userCocktails || [],
    user,
    isLoading,
    Spinner,
  }
}

export default useDashboard
