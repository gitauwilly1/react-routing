import React from 'react'
import { Link, useParams } from 'react-router-dom'

const products = [
  { id: 101, name: 'Product 1', price: '$10', description: 'Entry-level product for small use cases.' },
  { id: 102, name: 'Product 2', price: '$20', description: 'Balanced choice with extra capacity.' },
  { id: 103, name: 'Product 3', price: '$30', description: 'Great for teams that need flexibility.' },
  { id: 104, name: 'Product 4', price: '$40', description: 'Premium product with full feature access.' },
]

function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number.parseInt(id, 10))

  if (!product) {
    return (
      <section className="rounded-3xl border border-rose-200 bg-rose-50 p-6 text-rose-900 sm:p-8">
        <h2 className="text-2xl font-black">Product not found</h2>
        <p className="mt-2 text-rose-800">The selected product does not exist in this demo catalog.</p>
        <Link
          to="/products"
          className="mt-4 inline-block rounded-full bg-rose-700 px-4 py-2 text-sm font-semibold text-white hover:bg-rose-800"
        >
          Back to Products
        </Link>
      </section>
    )
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-[0_20px_45px_-32px_rgba(30,41,59,0.95)] sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-700">Product detail</p>
      <h2 className="mt-2 text-3xl font-black text-slate-900">{product.name}</h2>
      <p className="mt-2 text-lg font-semibold text-cyan-800">Price: {product.price}</p>
      <p className="mt-3 max-w-2xl text-slate-600">{product.description}</p>
      <div className="mt-6 flex gap-3">
        <Link
          to="/products"
          className="rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-900 transition hover:bg-cyan-100"
        >
          Back to Products
        </Link>
        <Link
          to="/contact"
          className="rounded-full bg-cyan-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-800"
        >
          Contact Sales
        </Link>
      </div>
    </section>
  )
}

export default ProductDetail