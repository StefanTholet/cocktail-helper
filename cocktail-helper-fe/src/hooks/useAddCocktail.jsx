import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useForm from './useForm'

const useAddCocktail = (formInitialState, ingredientsInitialState) => {
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
      { name: valuePropName, label: `Add ingredient`, id },
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
  return { ingredientInputs, values, onChange, onAdd, onRemove }
}

export default useAddCocktail
