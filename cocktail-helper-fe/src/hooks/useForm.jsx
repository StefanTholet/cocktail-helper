import { useState, useEffect } from 'react'

// Generic Form Values Management Hook
const useForm = (initialState) => {
  // Use provided inputs as initial state or set an empty object as state
  const [values, setValues] = useState(initialState ? initialState : {})
  const [disableSubmit, setDisableSubmit] = useState(true)
  // Errors
  const [errors, setErrors] = useState([])

  // onChange handler for form inputs
  const onChange = (e) => {
    if (e) {
      const target = e.target
      target.type !== 'radio' && e.preventDefault()

      setErrors([])

      const fieldName = target.name
      const fieldValue = target.value

      setValues((state) => {
        const updatedValues = { ...state, [fieldName]: fieldValue }
        return updatedValues
      })
    }
  }

  useEffect(() => {
    const noEmptyFields = Object.values(values).some((x) => !x)
    setDisableSubmit(noEmptyFields)
  }, [values])

  return { values, onChange, disableSubmit, setValues, errors, setErrors }
}

export default useForm
