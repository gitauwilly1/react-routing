import React from 'react'

function Contact() {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-[0_20px_45px_-32px_rgba(30,41,59,0.95)] sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-700">Contact</p>
      <h2 className="mt-2 text-3xl font-black text-slate-900">Get in touch</h2>
      <p className="mt-3 max-w-2xl text-slate-600">
        This is a static contact form for styling demonstration in this routing project.
      </p>
      <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
        <label className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
          Name
          <input
            type="text"
            placeholder="Jane Doe"
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-900 outline-none ring-cyan-500 transition focus:ring"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
          Email
          <input
            type="email"
            placeholder="jane@example.com"
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-900 outline-none ring-cyan-500 transition focus:ring"
          />
        </label>
        <label className="sm:col-span-2 flex flex-col gap-1 text-sm font-semibold text-slate-700">
          Message
          <textarea
            rows="5"
            placeholder="Tell us what you need..."
            className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-900 outline-none ring-cyan-500 transition focus:ring"
          />
        </label>
        <button
          type="submit"
          className="w-fit rounded-full bg-cyan-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-cyan-800"
        >
          Send Message
        </button>
      </form>
    </section>
  )
}

export default Contact