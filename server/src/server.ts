import prisma from './prisma'

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({
    message: 'UniTrade Namibia API is running 🚀',
  })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`UniTrade API running on http://localhost:${PORT}`)
})

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany()

  res.json(users)
})