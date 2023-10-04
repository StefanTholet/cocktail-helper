import {
  login,
  signup,
  addFavorite,
  removeFavorite,
  getUser,
  dashboard
} from '../controllers/userController.mjs'
import { authChecker } from '../middlewares/authChecker.mjs'
import express from 'express'

const router = express.Router()

router.post('/login', login)
router.post('/signup', signup)
router.post('/add-favorite', authChecker, addFavorite)
router.post('/remove-favorite', authChecker, removeFavorite)
router.get('/get-user', authChecker, getUser)
router.get('/dashboard', authChecker, dashboard)

export default router
