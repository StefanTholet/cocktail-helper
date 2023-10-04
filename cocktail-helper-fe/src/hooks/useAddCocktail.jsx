import { useState } from 'react'
import axiosInstance from '../axiosInstance/axiosInstance'
import { v4 as uuidv4 } from 'uuid'
import useForm from './useForm'

const useAddCocktail = (
  formInitialState,
  ingredientsInitialState,
  user,
  dispatch
) => {
  const [ingredientInputs, setIngredientInputs] = useState(
    ingredientsInitialState
  )

  const { values, setValues, onChange } = useForm(formInitialState)

  const onAdd = () => {
    const id = uuidv4()
    const valuePropName = `strIngredient-${id}`

    setValues((state) => ({ ...state, [valuePropName]: '' }))

    setIngredientInputs((state) => [
      ...state,
      { name: valuePropName, label: `Add ingredient`, id }
    ])
  }

  const onRemove = (id) => {
    if (ingredientInputs.length === 1) return

    setValues((state) => {
      const copy = { ...state }
      delete copy[id]
      return copy
    })
    setIngredientInputs((state) => {
      const filteredState = state.filter((x) => x.name !== id)

      return filteredState
    })
  }

  const reset = () => {
    setIngredientInputs(ingredientsInitialState)
    setValues(formInitialState)
  }

  const submit = async (e) => {
    e.preventDefault()
    const formValues = { ...values }
    let ingredientNum = 1

    //convert ingredients data to match the cocktails api format
    for (const key in values) {
      if (key.includes('strIngredient')) {
        const value = formValues[key]
        delete formValues[key]

        if (value === '') continue

        const newKey = key.split('-')[0] + ingredientNum
        formValues[newKey] = value
        ingredientNum++
      }
    }

    const result = await axiosInstance.post(
      '/cocktails/add',
      {
        ...formValues,
        email: user.email
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      }
    )

    if (result.data) {
      dispatch({ type: 'UPDATE_USER', payload: result.data })
      reset()
    }
  }

  return { ingredientInputs, values, onChange, onAdd, onRemove, submit }
}

export default useAddCocktail
