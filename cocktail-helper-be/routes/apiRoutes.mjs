import express from 'express'
import filtersController from '../controllers/filtersController.mjs'

const router = express.Router()

router.get('/filters', filtersController.getFiltersData)

export default router
