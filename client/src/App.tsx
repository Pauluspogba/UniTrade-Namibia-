function App() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Navigation */}
      <nav className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-blue-600">
            UniTrade Namibia
          </h1>

          <div className="flex gap-6">
            <button className="text-gray-600 hover:text-blue-600">
              Browse
            </button>

            <button className="text-gray-600 hover:text-blue-600">
              Sell
            </button>

            <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
              Login
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <main>
        <section className="bg-blue-600 px-6 py-20 text-white">
          <div className="mx-auto max-w-5xl text-center">

            <h2 className="text-5xl font-bold">
              Buy. Sell. Connect.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
              Namibia's student marketplace. Find affordable phones,
              laptops, textbooks, furniture and more from fellow students.
            </p>

            {/* Search */}
            <div className="mx-auto mt-8 flex max-w-2xl overflow-hidden rounded-lg bg-white">
              <input
                type="text"
                placeholder="Search for laptops, textbooks, phones..."
                className="flex-1 px-5 py-4 text-gray-800 outline-none"
              />

              <button className="bg-gray-900 px-6 font-semibold text-white">
                Search
              </button>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex justify-center gap-4">
              <button className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600">
                Browse Marketplace
              </button>

              <button className="rounded-lg border border-white px-6 py-3 font-semibold text-white">
                Sell an Item
              </button>
            </div>

          </div>
        </section>

        {/* Categories */}
        <section className="mx-auto max-w-7xl px-6 py-16">

          <h3 className="text-3xl font-bold text-gray-900">
            Popular Categories
          </h3>

          <p className="mt-2 text-gray-600">
            Find what you need from fellow students.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            <Category emoji="📱" title="Phones" />
            <Category emoji="💻" title="Laptops" />
            <Category emoji="📚" title="Textbooks" />
            <Category emoji="🎮" title="Gaming" />
            <Category emoji="🪑" title="Furniture" />
            <Category emoji="👕" title="Clothing" />

          </div>

        </section>
      </main>

    </div>
  )
}

function Category({ emoji, title }: { emoji: string; title: string }) {
  return (
    <div className="cursor-pointer rounded-xl border bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="text-4xl">{emoji}</div>

      <h4 className="mt-4 text-xl font-semibold text-gray-900">
        {title}
      </h4>

      <p className="mt-2 text-gray-500">
        Browse {title.toLowerCase()}
      </p>
    </div>
  )
}

export default App