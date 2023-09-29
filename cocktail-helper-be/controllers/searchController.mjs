import { getSearchResults } from '../models/apiService.mjs'

const getSearchData = async (req, res) => {
  try {
    const { search, searchOption } = req.query
    const result = await getSearchResults(searchOption, search)
    // console.log(result)
    res.json(result)
  } catch (error) {
    // console.error(error)
    res.status(500).json({ error: 'An error occurred' })
  }
}

export default {
  getSearchData,
}
