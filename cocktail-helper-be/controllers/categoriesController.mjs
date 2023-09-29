import { getCategories } from '../models/apiService.mjs'

const getFiltersData = async (req, res) => {
  try {
    const { categories, glasses, ingredients, alcoholic } =
      await getCategories()

    res.json({
      categories: categories.data.drinks,
      glasses: glasses.data.drinks,
      ingredients: ingredients.data.drinks,
      alcoholic: alcoholic.data.drinks
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'An error occurred' })
  }
}

export default {
  getFiltersData
}
