import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../services/api'

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const data = await loginUser({
        email,
        password,
      })

      console.log('Login successful:', data)

      alert('Login successful!')

      navigate('/home')
    } catch (error) {
      console.error('Login failed:', error)

      alert('Login failed. Check your email and password.')
    }
  }

  return (
    <div>
      <h1>UniTrade Namibia</h1>

      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit">Login</button>

        <p>
          Don't have an account?{' '}
          <a href="/register">Create an account</a>
        </p>
      </form>
    </div>
  )
}

export default Login