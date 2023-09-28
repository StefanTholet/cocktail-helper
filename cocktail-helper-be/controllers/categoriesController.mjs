import { getCategories } from '../models/apiService.mjs'

const getFiltersData = async (req, res) => {
  try {
    const { categories, glasses, ingredients, alcoholic } =
      await getCategories()

    res.json({
      categories: [
        {
          item: 'categories',
          subItems: categories.data.drinks.map((item) => Object.values(item)[0])
        },
        {
          item: 'glasses',
          subItems: glasses.data.drinks.map((item) => Object.values(item)[0])
        },
        {
          item: 'ingredients',
          subItems: ingredients.data.drinks.map(
            (item) => Object.values(item)[0]
          )
        },
        {
          item: 'alcoholic',
          subItems: alcoholic.data.drinks.map((item) => Object.values(item)[0])
        }
      ]
    })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'An error occurred' })
  }
}

export default {
  getFiltersData
}
