import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { getUser, createUser } from '../services/userServices.mjs'
import { secret } from '../secret.mjs'

const createToken = (_id) => {
  const payload = { _id }
  return jwt.sign(payload, secret, { expiresIn: '3d' })
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      res
        .status(400)
        .json({ message: 'All fields are required', isError: true })
      return
    }
    const user = await getUser(email)
    const match = user && (await bcrypt.compare(password, user.password))

    if (!user || !match) {
      res.status(401).json({ message: 'Wrong email or password' })
      return
    }

    const token = createToken(user._id)

    delete user.password

    res.json({ ...user, token })
  } catch (error) {
    console.log(error)
  }
}

export const signup = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      res
        .status(400)
        .json({ message: 'All fields are required', isError: true })
      return
    }
    const exists = await getUser(email)
    if (exists) {
      res.status(401).json({ message: 'Email already in use' })
      return
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const userId = await createUser(email, hash)
    const token = createToken(userId)

    res.status(200).json({ email, token })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
