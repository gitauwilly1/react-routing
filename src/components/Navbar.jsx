import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/products', label: 'Products' },
    { to: '/contact', label: 'Contact' },
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/post', label: 'Post' },
  ]

  return (
    <header className="rounded-3xl border border-cyan-100 bg-white/80 p-3 shadow-[0_18px_35px_-24px_rgba(14,116,144,0.85)] backdrop-blur-sm sm:p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-700">React Routing Lab</p>
        </div>
        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap gap-2 text-sm font-semibold">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 transition ${
                      isActive
                        ? 'bg-cyan-700 text-white shadow-sm'
                        : 'bg-cyan-50 text-cyan-800 hover:bg-cyan-100'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar