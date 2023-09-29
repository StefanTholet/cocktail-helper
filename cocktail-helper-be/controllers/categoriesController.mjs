import { getCategories } from '../models/apiService.mjs'

const getCategoriesData = async (req, res) => {
  try {
    const result = await getCategories()

    res.json(result)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'An error occurred' })
  }
}

export default {
  getCategoriesData,
}
