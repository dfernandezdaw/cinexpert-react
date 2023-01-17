import React, { useEffect } from 'react'
import MoviesGrid from '../components/MoviesGrid'

// Component to display the watchlist page with the movies grid

const Watchlist = () => {
  // Get the watchlist from local storage
  const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [] // If there is no watchlist in local storage, set an empty array

  return (
    <div>
      <h1>Watchlist</h1>
      <MoviesGrid watchlist={watchlist} />
    </div>
  )
}

export default Watchlist
