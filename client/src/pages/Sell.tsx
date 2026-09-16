import { useState } from 'react'
import { createListing } from '../services/api'

function Sell() {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const data = await createListing({
        title,
        price: Number(price),
        description,
      })

      console.log('Listing created:', data)

      alert('Item posted successfully!')

      setTitle('')
      setPrice('')
      setDescription('')
    } catch (error) {
      console.error('Listing failed:', error)

      alert('Failed to post item. Make sure you are logged in.')
    }
  }

  return (
    <div>
      <h1>Sell an Item</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Price (N$)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <textarea
          placeholder="Describe your item"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button type="submit">
          Post Item
        </button>
      </form>
    </div>
  )
}

export default Sell