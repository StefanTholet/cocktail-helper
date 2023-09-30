import { getUser, createUser } from '../services/userServices.mjs'
import bcrypt from 'bcrypt'

export const login = async (req, res) => {
  try {
    res.send({ message: 'login' })
  } catch (error) {
    console.log(error)
  }
}

export const signup = async (req, res) => {
  try {
    const { email, password } = req.body
    const exists = await getUser(email)
    if (exists) {
      res.json({ message: 'Email already in use' })
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await createUser(email, hash)
    console.log(user)
    res.status(200).json({ user })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
