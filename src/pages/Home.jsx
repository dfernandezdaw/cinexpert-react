import React, { useEffect } from 'react'
import MoviesGrid from '../components/MoviesGrid'
import SearchBar from '../components/SearchBar'
import { useSearchParams, Link } from 'react-router-dom'

// Component to display the home page with the search bar and the movies grid

const Home = () => {
  return (
    <div>
      <Link to='/'>
        <h1>Movies</h1>
      </Link>
      <SearchBar />
      <MoviesGrid />
    </div>
  )
}

export default Home
