import {
  login,
  signup,
  addFavorite,
  removeFavorite,
  getUser,
  dashboard,
} from '../controllers/userController.mjs'
import express from 'express'

const router = express.Router()

router.post('/login', login)
router.post('/signup', signup)
router.post('/add-favorite', addFavorite)
router.post('/remove-favorite', removeFavorite)
router.get('/get-user', getUser)
router.get('/dashboard', dashboard)

export default router
