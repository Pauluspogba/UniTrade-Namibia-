import { Router } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import prisma from '../prisma'

const router = Router()

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-change-this'

// REGISTER
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, university, campus } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({
        message: 'Name, email and password are required',
      })
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return res.status(409).json({
        message: 'Email is already registered',
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        university,
        campus,
      },
      select: {
        id: true,
        name: true,
        email: true,
        university: true,
        campus: true,
        createdAt: true,
      },
    })

    res.status(201).json({
      message: 'User registered successfully',
      user,
    })
  } catch (error) {
    console.error(error)

    res.status(500).json({
      message: 'Something went wrong',
    })
  }
})

// LOGIN
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({
        message: 'Email and password are required',
      })
    }

    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      return res.status(401).json({
        message: 'Invalid email or password',
      })
    }

    const passwordMatches = await bcrypt.compare(password, user.password)

    if (!passwordMatches) {
      return res.status(401).json({
        message: 'Invalid email or password',
      })
    }

    const token = jwt.sign(
      {
        userId: user.id,
      },
      JWT_SECRET,
      {
        expiresIn: '7d',
      },
    )

    res.json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        university: user.university,
        campus: user.campus,
        createdAt: user.createdAt,
      },
    })
} catch (error) {
  console.error('AUTH ERROR:', error)

  res.status(500).json({
    message: 'Something went wrong',
    error: error instanceof Error ? error.message : String(error),
  })
}
})

export default router