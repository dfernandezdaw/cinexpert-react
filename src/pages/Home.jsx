import React from 'react'
import MoviesGrid from '../components/MoviesGrid'
import Search from '../components/Search'
import { useSearchParams, Link } from 'react-router-dom'

const Home = () => {
  const [query] = useSearchParams()
  const search = query.get('search')
  return (
    <div>
      <Link to='/'>
        <h1>Movies</h1>
      </Link>
      <Search />
      <MoviesGrid search={search} />
    </div>
  )
}

export default Home
