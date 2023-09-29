import express from 'express'
import categoriesController from '../controllers/categoriesController.mjs'
import searchController from '../controllers/searchController.mjs'
const router = express.Router()

router.get('/categories', categoriesController.getCategoriesData)
router.get('/search', searchController.getSearchData)

export default router
