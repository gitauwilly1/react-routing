import React from 'react'

function Users() {
    const users = [
        { id: 1, name: 'John Doe', role: 'Admin' },
        { id: 2, name: 'Jane Smith', role: 'Editor' },
        { id: 3, name: 'Bob Johnson', role: 'Viewer' },
    ]

  return (
        <div>
            <h3 className="text-2xl font-black text-slate-900">Users</h3>
            <p className="mt-2 text-slate-600">Team members currently in this workspace.</p>
            <ul className="mt-4 space-y-3">
                {users.map((user) => (
                    <li
                        key={user.id}
                        className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                    >
                        <span className="font-semibold text-slate-800">{user.name}</span>
                        <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-cyan-800">
                            {user.role}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
  )
}

export default Users