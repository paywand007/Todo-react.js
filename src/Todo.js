import React from 'react'

export default function Todo({todo}) {
  return (
      <h1>
          <input type="checkbox" checked={todo.complete} />
          {todo.name}</h1> 
  )
}
