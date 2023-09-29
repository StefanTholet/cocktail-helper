import { useState, useEffect } from 'react'
//Generic Form Values Management Hook
const useForm = (initialState) => {
  //use provided inputs as initial state or set empty object as state
  const [values, setValues] = useState(initialState ? initialState : {})
  const [disableSubmit, setDisableSubmit] = useState(true)
  //errros
  const [errors, setErrors] = useState([])

  //onChange handler for form inputs
  const onChange = (e) => {
    if (e) {
      e.preventDefault()
      setErrors([])
      const fieldName = e.target.name
      const fieldValue = e.target.value

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

  return [values, onChange, disableSubmit, errors, setErrors]
}

export default useForm
