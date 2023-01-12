import React from 'react'
import { Link } from 'react-router-dom'

const TvShowCard = ({ tvshow }) => {
  const imgURL = `https://image.tmdb.org/t/p/w500${tvshow.poster_path}`
  return (
    <Link to={`/tvshow/${tvshow.id}`}>
      <img
        src={`https://image.tmdb.org/t/p/w500${tvshow.poster_path}`}
        alt={tvshow.title}
        className='films'
      />
      <p>{tvshow.original_name}</p>
    </Link>
  )
}

export default TvShowCard
