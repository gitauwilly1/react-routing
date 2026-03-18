import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="space-y-6 rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-[0_20px_45px_-32px_rgba(30,41,59,0.95)] sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-700">Welcome</p>
      <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
        Learn React Routing with a clean Tailwind UI
      </h2>
      <p className="max-w-2xl text-base text-slate-600">
        This mini app demonstrates top-level and nested routes with a simple, polished layout.
        Explore products, view details, and navigate the dashboard sections.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link
          to="/products"
          className="rounded-full bg-cyan-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-cyan-800"
        >
          Browse Products
        </Link>
        <Link
          to="/dashboard"
          className="rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-sm font-semibold text-cyan-900 transition hover:bg-cyan-100"
        >
          Open Dashboard
        </Link>
      </div>
    </section>
  )
}

export default Home