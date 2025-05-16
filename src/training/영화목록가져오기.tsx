import { useState, useEffect } from 'react'

export type Root = Root2[]

export interface Root2 {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export default function App() {
  const [movies, setMovies] = useState<Root2[]>([])

  // movies와 같은 상태 변수들이 변할 때마다 App 컴포넌트가 리렌더링됩니다.
  // 이렇게 되면 서버에 매번 요청을 보내게 됨. 따라서 useEffect를 사용하여
  // App 컴포넌트가 처음 렌더링될 때만 fetchMovies() 함수를 호출하도록 합니다.
  useEffect(() => {
    fetchMovies()
  }, [])

  async function fetchMovies() {
    const response = await fetch(
      'https://omdbapi.com/?apikey=7035c60c&s=avengers'
    )
    const { Search } = await response.json()
    setMovies(Search)
  }

  return (
    <>
      <h1>영화 목록</h1>
      <ul>
        {movies.map(movie => (
          <li key={movie.imdbID}>{movie.Title}</li>
        ))}
      </ul>
    </>
  )
}
