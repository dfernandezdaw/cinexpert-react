import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {
  const imgURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  return (
    <Link to={`/movie/${movie.id}`}>
      <img src={imgURL} alt={movie.title} className='films' />
      <p>{movie.title}</p>
    </Link>
  )
}

export default MovieCard
