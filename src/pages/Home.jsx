import React, { useEffect } from 'react'
import MoviesGrid from '../components/MoviesGrid'
import SearchBar from '../components/SearchBar'
import { useSearchParams, Link } from 'react-router-dom'

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
