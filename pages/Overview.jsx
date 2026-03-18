import React from 'react'

function Overview() {
  const metrics = [
    { label: 'Active users', value: '1,284' },
    { label: 'Conversion rate', value: '7.6%' },
    { label: 'Open tickets', value: '18' },
  ]

  return (
    <div>
      <h3 className="text-2xl font-black text-slate-900">Overview</h3>
      <p className="mt-2 text-slate-600">Quick snapshot of current workspace activity.</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        {metrics.map((metric) => (
          <article key={metric.label} className="rounded-xl bg-cyan-50 p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-cyan-700">{metric.label}</p>
            <p className="mt-2 text-2xl font-black text-cyan-900">{metric.value}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Overview