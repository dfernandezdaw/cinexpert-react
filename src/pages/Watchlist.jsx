import React, { useEffect } from 'react'
import MoviesGrid from '../components/MoviesGrid'

const Watchlist = () => {
  // Get the watchlist from local storage
  const watchlist = JSON.parse(localStorage.getItem('watchlist'))

  return (
    <div>
      <h1>Watchlist</h1>
      <MoviesGrid watchlist={watchlist} />
    </div>
  )
}

export default Watchlist
