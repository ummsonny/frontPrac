import type { Movie } from '@/stores/movie'
import Image from '@/components/Image'
import { Link } from 'react-router'

export default function MovieList({ movie }: { movie: Movie }) {
  return (
    <div className="width-${200}">
      <Image
        src={movie.Poster}
        width={200}
        height={300}
      />
      <Link to={`/movies/${movie.imdbID}`}>
        {movie.Title} / {movie.Year}
      </Link>
    </div>
  )
}
