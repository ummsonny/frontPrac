import { useState, useMemo } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  //useMemo는 count가 변경될 때만 double을 재계산합니다.
  const double = useMemo(() => count * 2, [count])

  return (
    <>
      <h1 onClick={() => setCount(count + 1)}>Count: {count}</h1>
      <h2>Double: {double}</h2>
    </>
  )
}
