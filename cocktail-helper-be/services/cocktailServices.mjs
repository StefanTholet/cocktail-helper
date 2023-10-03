import { ObjectId } from 'mongodb'
import { getDb } from '../config/db.mjs'

const addCocktail = async (cocktail) => {
  const result = await getDb()
    .collection('cocktails')
    .insertOne({ ...cocktail, _id: new ObjectId() })

  return result
}

const getUserCocktails = async (email) => {
  const cocktails = await getDb()
    .collection('cocktails')
    .find({ email })
    .toArray()
  return cocktails
}

export default {
  addCocktail,
  getUserCocktails,
}
