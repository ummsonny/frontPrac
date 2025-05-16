import { useState, useMemo, useEffect } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  // useMemo와 useEffect는 비슷해보이지만 전자는 double이라는 새로운 값을 만드는용
  // 후자는 count를 감시하고 변화에 따라 특정 작업을 수행.
  // 또한 의존성배열을 비워놓고 사용하면 컴포넌트가 처음 렌더링될 때만 실행할 수 있다.(영화목록가져오기 참고)

  // 계산된 데이터 : useMemo(실행할 함수, 의존성 배열)
  const double = useMemo(() => count * 2, [count])

  // 데이터 감시시 : useEffect(실행할 함수, 의존성 배열)
  useEffect(() => {
    console.log('count가 변경되었습니다.', count)
  }, [count])

  return (
    <>
      <h1>count: {count}</h1>
      <h2>double: {double}</h2>
      <button onClick={() => setCount(count + 1)}>증가</button>
    </>
  )
}
