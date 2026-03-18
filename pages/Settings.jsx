import React from 'react'

function Users() {
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Bob Johnson' },
    ];
  return (
    <div>
        <h2>Users</h2>
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default Users