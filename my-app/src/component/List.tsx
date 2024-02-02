"use client"
import { useTodos } from '@/store/Todos'
import React from 'react'

function List() {
    const {todos} = useTodos()
    console.log(todos)
  return (
    <ul>
      {
        todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))
      }
    </ul>
  )
}

export default List
