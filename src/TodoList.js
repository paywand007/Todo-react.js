import React from 'react'
import Todo from './Todo'

export default function TodoList({todo,toggleTodo}) {
  return (
    <div>    {todo.map(todo => <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} /> ) } </div>
  )
}
