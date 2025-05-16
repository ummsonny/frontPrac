import { useState, useEffect, useRef } from 'react'
import type { Todo } from '@/stores/todo'
import { useTodoStore } from '@/stores/todo'
import Button from '@/components/Button'

export default function TodoItem({ todo }: { todo: Todo }) {
  const [isEditMode, setIsEditMode] = useState(false)
  const [title, setTitle] = useState(todo.title)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const updateTodo = useTodoStore(state => state.updateTodo)
  const deleteTodo = useTodoStore(state => state.deleteTodo)

  useEffect(() => {
    if (isEditMode) {
      // 포커스
      inputRef.current?.focus()
    }
  }, [isEditMode])

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    // 한글 입력 중에 Enter 키를 누르면 이벤트가 두 번 발생하는 문제를 해결하기 위한 코드
    if (e.nativeEvent.isComposing) {
      return
    }
    if (e.key === 'Enter') {
      updateTodo({
        ...todo,
        title
      })
    }
    if (e.key === 'Escape') {
      handleCancel()
    }
  }

  function handleCancel() {
    setIsEditMode(false)
    setTitle(todo.title) // 원래 제목으로 되돌리기
  }

  return (
    <div className="flex gap-[10px]">
      {isEditMode ? (
        <>
          <input
            ref={inputRef}
            className="rounded-md border-1 border-gray-400"
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button
            onClick={() =>
              updateTodo({
                ...todo,
                title
              })
            }>
            저장
          </Button>
          <Button
            color="secondary"
            onClick={handleCancel}>
            취소
          </Button>
        </>
      ) : (
        <>
          <div>{todo.title}</div>
          <Button
            className="rounded-md bg-blue-500 px-2 text-white"
            onClick={() => setIsEditMode(true)}>
            수정
          </Button>
          <Button
            color="danger"
            onClick={() => deleteTodo(todo.id)}>
            삭제
          </Button>
        </>
      )}
    </div>
  )
}
