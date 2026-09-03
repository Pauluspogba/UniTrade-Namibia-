import { Router } from 'express'
import prisma from '../prisma'
import { authMiddleware, AuthRequest } from '../middleware/auth.middleware'

const router = Router()

// GET CURRENT USER
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const authReq = req as AuthRequest
    const userId = authReq.userId

    if (!userId) {
      return res.status(401).json({
        message: 'Authentication required',
      })
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        email: true,
        university: true,
        campus: true,
        createdAt: true,
      },
    })

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      })
    }

    res.json({
      user,
    })
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: 'Something went wrong',
    })
  }
})

export default router