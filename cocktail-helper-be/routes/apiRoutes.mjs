import express from 'express'
import categoriesController from '../controllers/categoriesController.mjs'

const router = express.Router()

router.get('/categories', categoriesController.getFiltersData)

export default router
