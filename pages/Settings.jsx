import React from 'react'
import { Link } from 'react-router-dom'

function Products() {
    const products = [
        { id: 101, name: 'Product 1', price: '$10' },
        { id: 102, name: 'Product 2', price: '$20' },
        { id: 103, name: 'Product 3', price: '$30' },
        { id: 104, name: 'Product 4', price: '$40' },
    ]

  return (
        <section className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-[0_20px_45px_-32px_rgba(30,41,59,0.95)] sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-700">Catalog</p>
            <h2 className="mt-2 text-3xl font-black text-slate-900">Products List</h2>
            <p className="mt-3 text-slate-600">Select any item to open its dynamic detail route.</p>

            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {products.map((product) => (
                    <li
                        key={product.id}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-cyan-200"
                    >
                        <h3 className="text-lg font-bold text-slate-900">{product.name}</h3>
                        <p className="mt-1 text-slate-600">Price: {product.price}</p>
                        <Link
                            to={`/products/${product.id}`}
                            className="mt-4 inline-block rounded-full bg-cyan-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-800"
                        >
                            View Details
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
  )
}

export default Products