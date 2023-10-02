import express from 'express'
import cors from 'cors'
import { initDb } from './config/db.mjs'
import { uri } from './secret.mjs'
import apiRouter from './routes/apiRoutes.mjs'
import userRouter from './routes/userRoutes.mjs'

const app = express()

const corsOptions = {
  origin: 'http://127.0.0.1:5173',
  optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.json())
const PORT = 3000

initDb(uri)

app.use('/api', apiRouter)
app.use('/user', userRouter)

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`)
})
