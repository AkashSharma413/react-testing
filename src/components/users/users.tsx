import React, { useState, useEffect } from 'react'

const Users = () => {
  const [users, setUsers] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data.map((user: { name: string }) => user.name)))
      .catch(() => setError('Error fetching users'))
  }, [])
  return (
    <>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.length ? (
          users.map((user) => <li key={user}>{user}</li>)
        ) : (
          <li>No user found</li>
        )}
      </ul>
    </>
  )
}

export default Users
