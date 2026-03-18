import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <section className="rounded-3xl border border-rose-200 bg-rose-50 p-6 text-rose-900 sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-rose-700">404</p>
      <h2 className="mt-2 text-3xl font-black">Page Not Found</h2>
      <p className="mt-3 max-w-xl text-rose-800">
        The route you requested does not exist. Use the navigation menu or return to the home page.
      </p>
      <Link
        to="/"
        className="mt-5 inline-block rounded-full bg-rose-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-rose-800"
      >
        Back Home
      </Link>
    </section>
  )
}

export default NotFound