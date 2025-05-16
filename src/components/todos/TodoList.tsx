import { useTodoStore } from '@/stores/todo'
import { useEffect } from 'react'
import TodoItem from './TodoItem'

export default function TodoList() {
  const todos = useTodoStore(state => state.todos)
  const fetchTodos = useTodoStore(state => state.fetchTodos)

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </>
  )
}
