import express from 'express'
import cocktailsController from '../controllers/cocktailsController.mjs'

const router = express.Router()

router.post('/add', cocktailsController.addCocktail)

export default router
