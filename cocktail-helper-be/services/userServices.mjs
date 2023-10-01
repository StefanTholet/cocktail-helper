import { getDb } from '../config/db.mjs'

export const getUser = async (email) => {
  const user = await getDb().collection('users').findOne({ email })
  return user
}

export const createUser = async (email, password) => {
  const user = await getDb().collection('users').insertOne({ email, password })
  return user?.insertedId.toString()
}

const addFavorite = async (email, cocktailId) => {
  const updatedUser = await getDb()
    .collection('users')
    .findOneAndUpdate(
      { email },
      { $addToSet: { favorites: cocktailId } },
      { returnDocument: 'after' }
    )

  return updatedUser
}

const removeFavorite = async (email, cocktailId) => {
  const updatedUser = await getDb()
    .collection('users')
    .findOneAndUpdate(
      { email },
      { $pull: { favorites: cocktailId } },
      { returnDocument: 'after' }
    )

  return updatedUser
}

export default { getUser, createUser, addFavorite, removeFavorite }
