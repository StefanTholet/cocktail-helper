import cocktailServices from '../services/cocktailServices.mjs'
import userServices from '../services/userServices.mjs'

const addCocktail = async (req, res) => {
  try {
    const body = req.body
    if (!body && !body.email) {
      res.status(400).json({ error: 'Cocktail data is missing' })
    }
    await cocktailServices.addCocktail(body)
    const user = await userServices.getUser(body.email)

    const userCocktails = await cocktailServices.getUserCocktails(body.email)
    user.userCocktails = userCocktails || []
    res.json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'An error occurred' })
  }
}

export default {
  addCocktail,
}
