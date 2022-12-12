import React from 'react'

const UserRows = ({el}) => {
  return (
    <tr>
          <td>{el.id}</td>
          <td>{el.name}</td>
          <td>{el.username}</td>
          <td>{el.email}</td>
        </tr>
  )
}

export default UserRows