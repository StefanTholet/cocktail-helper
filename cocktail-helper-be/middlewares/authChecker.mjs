import jwt from 'jsonwebtoken'
import { secret } from '../secret.mjs'

const authChecker = (req, res, next) => {
  try {
    const { authorization } = req.headers // Use 'authorization' instead of 'Authorization'

    if (!authorization) {
      return res.status(401).json({ error: 'Authorization token required!' })
    }

    const token = authorization.split(' ')[1]

    const { _id } = jwt.verify(token, secret)

    if (!_id) throw new Error()

    next()
  } catch (error) {
    console.log(error)
    res.status(401).json({ error: 'Not authorized!' })
  }
}

export { authChecker }
