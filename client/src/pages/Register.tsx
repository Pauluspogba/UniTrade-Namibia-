import { useState } from 'react'
import { registerUser } from '../services/api'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [university, setUniversity] = useState('')
  const [campus, setCampus] = useState('')

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  try {
    const data = await registerUser({
      name,
      email,
      password,
      university,
      campus,
    })

    console.log('Registration successful:', data)

    alert('Account created successfully!')
  } catch (error) {
    console.error('Registration failed:', error)

    alert('Registration failed. Check the server.')
  }
}

  return (
    <div>
      <h1>UniTrade Namibia</h1>

      <h2>Create Account</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>

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
            placeholder="Create a password"
            required
          />
        </div>

        <div>
          <label>University</label>
          <input
            type="text"
            value={university}
            onChange={(e) => setUniversity(e.target.value)}
            placeholder="e.g. UNAM"
          />
        </div>

        <div>
          <label>Campus</label>
          <input
            type="text"
            value={campus}
            onChange={(e) => setCampus(e.target.value)}
            placeholder="e.g. Main Campus"
          />
        </div>

        <button type="submit">Create Account</button>

        <p>
          Already have an account?{' '}
          <a href="/">Login</a>
        </p>
      </form>
    </div>
  )
}

export default Register