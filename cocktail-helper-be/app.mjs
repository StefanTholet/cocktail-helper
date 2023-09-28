import express from 'express'
import cors from 'cors'
import { initDb } from './config/db.mjs'
import { uri } from './secret.mjs'
import router from './routes/apiRoutes.mjs'

const app = express()

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
}

app.use(cors(corsOptions))
const PORT = 3000

initDb(uri)

app.use(router)

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`)
})
