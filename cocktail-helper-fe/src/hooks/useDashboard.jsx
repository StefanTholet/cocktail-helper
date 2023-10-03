import { useState, useEffect, useMemo } from 'react'
import useAuthContext from './useAuthContext'
import useAddCocktail from './useAddCocktail'
import useManageFavorites from './useManageFavorites'
import {
  FORM_INITIAL_STATE,
  INGREDIENT_INPUTS_INITIAL_STATE,
} from '../pages/dashboard/dashboardConstants'
import axios from 'axios'

const useDashboard = () => {
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
      const result = await axios.get('http://localhost:3000/user/dashboard', {
        params: { email: user.email },
      })

      if (result.data) {
        dispatch({ type: 'UPDATE_USER', payload: result.data })
      }
    }
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
    userCocktails: user.userCocktails,
    user,
  }
}

export default useDashboard
