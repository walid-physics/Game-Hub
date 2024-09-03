import { useGenres } from '../hooks/useGenres'

export const GenresList = () => {
    const { genres, error, isLoading } = useGenres();
  return (
      <ul>
          {genres.map(genre => <li key={genre.id}>{ genre.name }</li>)}
      </ul>
  )
}
