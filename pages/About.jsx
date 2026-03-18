import React from 'react'

function About() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-[0_20px_45px_-32px_rgba(30,41,59,0.95)] sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-700">About</p>
      <h2 className="mt-2 text-3xl font-black text-slate-900">About This Demo</h2>
      <p className="mt-4 max-w-3xl text-slate-600">
        This project focuses on route navigation patterns in React Router. It includes dynamic routes,
        nested routes, and a fallback page, all styled with Tailwind utility classes.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <article className="rounded-2xl bg-cyan-50 p-4">
          <h3 className="font-bold text-cyan-900">Top-level routes</h3>
          <p className="mt-2 text-sm text-cyan-800">Home, About, Contact, Products, Dashboard.</p>
        </article>
        <article className="rounded-2xl bg-amber-50 p-4">
          <h3 className="font-bold text-amber-900">Dynamic route</h3>
          <p className="mt-2 text-sm text-amber-800">Product details are loaded by `id` parameter.</p>
        </article>
        <article className="rounded-2xl bg-emerald-50 p-4">
          <h3 className="font-bold text-emerald-900">Nested route</h3>
          <p className="mt-2 text-sm text-emerald-800">Dashboard includes Overview, Users, Settings.</p>
        </article>
      </div>
    </section>
  )
}

export default About