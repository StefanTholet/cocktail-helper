import { getDb } from '../config/db.mjs'

export const getUser = async (email) => {
  const user = await getDb().collection('users').findOne({ email })
  return user
}

export const createUser = async (email, password) => {
  const user = await getDb().collection('users').insertOne({ email, password })
  return user?.insertedId.toString()
}
