import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Dashboard() {
  const tabs = [
    { to: 'overview', label: 'Overview' },
    { to: 'users', label: 'Users' },
    { to: 'settings', label: 'Settings' },
  ]

  return (
    <section className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-[0_20px_45px_-32px_rgba(30,41,59,0.95)] sm:p-8">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-700">Dashboard</p>
      <h2 className="mt-2 text-3xl font-black text-slate-900">Team Workspace</h2>

      <div className="mt-6 grid gap-6 md:grid-cols-[220px_1fr]">
        <nav className="space-y-2 rounded-2xl border border-slate-200 bg-slate-50 p-3" aria-label="Dashboard sections">
          {tabs.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              className={({ isActive }) =>
                `block rounded-xl px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? 'bg-cyan-700 text-white'
                    : 'text-slate-700 hover:bg-slate-200'
                }`
              }
            >
              {tab.label}
            </NavLink>
          ))}
        </nav>

        <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
          <Outlet />
        </div>
      </div>
    </section>
  )
}

export default Dashboard