import React from 'react'
import MoviesGrid from '../components/MoviesGrid'
import Search from '../components/Search'

const Home = () => {
  return (
    <div>
      <h1>Movies</h1>
      <Search />
      <MoviesGrid />
    </div>
  )
}

export default Home
