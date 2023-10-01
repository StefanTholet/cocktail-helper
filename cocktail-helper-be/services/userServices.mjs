import { getDb } from '../config/db.mjs'
import { getCocktailById } from './apiService.mjs'

export const getUser = async (email) => {
  try {
    const user = await getDb().collection('users').findOne({ email })
    if (user && user.favorites) {
      const { favorites } = user
      let favoriteCocktails = favorites.map((id) => getCocktailById(id))
      favoriteCocktails = await Promise.all(favoriteCocktails)
      user.favoriteCocktails = favoriteCocktails.map((x) => x.data.drinks)
    }

    return user
  } catch (error) {}
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
