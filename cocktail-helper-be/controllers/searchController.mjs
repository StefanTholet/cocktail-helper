import { getSearchResults } from '../services/apiService.mjs'

const getSearchData = async (req, res) => {
  try {
    const { search, searchOption } = req.query
    const result = await getSearchResults(searchOption, search)
    if (!result) {
      res.status(204)
    }
    res.json(result)
  } catch (error) {
    // console.error(error)
    res.status(500).json({ error: 'An error occurred' })
  }
}

export default {
  getSearchData
}
