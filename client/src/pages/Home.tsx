function Home() {
  return (
    <div>
      <header>
        <h1>UniTrade Namibia</h1>

        <nav>
          <a href="/home">Home</a>{' '}
          <a href="#">My Listings</a>{' '}
          <a href="#">Profile</a>
        </nav>
      </header>

      <main>
        <section>
          <h2>Buy & Sell with Students</h2>

          <p>
            Find textbooks, electronics, clothes, furniture and more
            from students around Namibia.
          </p>

          <input
            type="text"
            placeholder="Search for items..."
          />

          <button>Search</button>
        </section>

        <section>
          <h2>Categories</h2>

          <button>Electronics</button>
          <button>Textbooks</button>
          <button>Clothing</button>
          <button>Furniture</button>
          <button>Other</button>
        </section>

        <section>
          <h2>Marketplace</h2>

          <div>
            <h3>iPhone 13</h3>
            <p>N$5,500</p>
            <p>UNAM - Main Campus</p>
            <button>View Item</button>
          </div>

          <div>
            <h3>Computer Science Textbook</h3>
            <p>N$350</p>
            <p>UNAM - Main Campus</p>
            <button>View Item</button>
          </div>

          <div>
            <h3>Study Desk</h3>
            <p>N$800</p>
            <p>NAMCOL</p>
            <button>View Item</button>
          </div>
        </section>

        <section>
          <h2>Want to sell something?</h2>

          <p>List your item and reach students looking to buy.</p>

          <button>Sell an Item</button>
        </section>
      </main>
    </div>
  )
}

export default Home