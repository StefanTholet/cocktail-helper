// import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { FORM_SUBMIT_MAPPER } from './authConstants'

const useAuth = (location) => {
  const navigate = useNavigate()

  const formSubmit = async (e, body) => {
    try {
      e.preventDefault()
      const result = await axios.post(
        `http://localhost:3000${FORM_SUBMIT_MAPPER[location]}`,
        body
      )

      if (result) {
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return formSubmit
}

export default useAuth
