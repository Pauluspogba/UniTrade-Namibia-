import { Router } from 'express'
import prisma from '../prisma'
import { authMiddleware, AuthRequest } from '../middleware/auth.middleware'

const router = Router()

// CREATE LISTING
router.post('/', authMiddleware, async (req: AuthRequest, res) => {
  try {
    const { title, price, description } = req.body

    if (!title || price === undefined || !description) {
      return res.status(400).json({
        message: 'Title, price and description are required',
      })
    }

    if (!req.userId) {
      return res.status(401).json({
        message: 'Authentication required',
      })
    }

    const listing = await prisma.listing.create({
      data: {
        title,
        price: Number(price),
        description,
        sellerId: req.userId,
      },
    })

    res.status(201).json({
      message: 'Listing created successfully',
      listing,
    })
  } catch (error) {
    console.error('LISTING ERROR:', error)

    res.status(500).json({
      message: 'Something went wrong',
    })
  }
})

export default router