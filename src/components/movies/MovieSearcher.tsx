import { useMovieStore } from '@/stores/movie'

export default function MovieSearcher() {
  const fetchMovies = useMovieStore(state => state.fetchMovies)
  const searchText = useMovieStore(state => state.searchText)
  const setSearchText = useMovieStore(state => state.setSearchText)
  return (
    <div>
      <input
        value={searchText}
        className="border-1 border-gray-400"
        type="text"
        onChange={e => {
          setSearchText(e.target.value)
        }}
        onKeyDown={e => {
          if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
            fetchMovies()
          }
        }}
      />
      <button onClick={fetchMovies}>Search!</button>
    </div>
  )
}
