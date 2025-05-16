import { useMovieStore } from '@/stores/movie'
import Loader from '@/components/Loader'
import MovieItem from '@/components/movies/MovieItem'

export default function MovieList() {
  const movies = useMovieStore(state => state.movies)
  const isLoading = useMovieStore(state => state.isLoading)
  const message = useMovieStore(state => state.message)
  return (
    <>
      {isLoading && (
        <div className="absolute top-0 right-0 bottom-0 left-0 m-auto">
          <Loader />
        </div>
      )}
      {message && <div>{message}</div>}
      <div className="grid grid-cols-4 gap-4">
        {movies?.map(movie => {
          return (
            <MovieItem
              key={movie.imdbID}
              movie={movie}
            />
          )
        })}
      </div>
    </>
  )
}
