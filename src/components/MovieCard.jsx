import React from 'react'
import { Link } from 'react-router-dom'

// Component to display a movie card with a link to the movie details page

const MovieCard = ({ movie }) => {
  const imgURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  return (
    <Link to={`/movie/${movie.id}`}>
      {/* If the poster is null show a placeholder image */}
      {movie.poster_path === null ? (
        <svg
          id='glyphicons-basic'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 32 32'
          style={{ width: '500px' }}
        >
          <path
            fill='#b5b5b5'
            id='picture'
            d='M27.5,5H4.5A1.50008,1.50008,0,0,0,3,6.5v19A1.50008,1.50008,0,0,0,4.5,27h23A1.50008,1.50008,0,0,0,29,25.5V6.5A1.50008,1.50008,0,0,0,27.5,5ZM26,18.5l-4.79425-5.2301a.99383.99383,0,0,0-1.44428-.03137l-5.34741,5.34741L19.82812,24H17l-4.79291-4.793a1.00022,1.00022,0,0,0-1.41418,0L6,24V8H26Zm-17.9-6a2.4,2.4,0,1,1,2.4,2.4A2.40005,2.40005,0,0,1,8.1,12.5Z'
          />
        </svg>
      ) : (
        <img src={imgURL} alt={movie.title} className='films' />
      )}
      <p>{movie.title}</p>
    </Link>
  )
}

export default MovieCard
