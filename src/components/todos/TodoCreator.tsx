import { useTodoStore } from '@/stores/todo'
import Button from '@/components/Button'
import { useState } from 'react'

export default function TodoCreator() {
  const [loading, setLoading] = useState(false)
  const title = useTodoStore(state => state.title)
  const setTitle = useTodoStore(state => state.setTitle)
  const createTodo = useTodoStore(state => state.createTodo)

  async function handleCreateTodo() {
    if (loading) return
    setLoading(true)
    await createTodo()
    setLoading(false)
  }

  return (
    <div className="flex items-center gap-2">
      <input
        className="h-[30px] rounded-md border-1 border-gray-400 px-2"
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={e => {
          if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
            handleCreateTodo()
          }
        }}
      />
      <Button
        loading={loading}
        onClick={handleCreateTodo}>
        추가
      </Button>
    </div>
  )
}
