import React from 'react'
import MovieCard from './MovieCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { api_key, BASE_URL } from '../api'
import Spinner from '../components/Spinner'

const MoviesGrid = ({ search }) => {
  // Define state for movies
  const [movies, setMovies] = useState([])
  // Define state for loading
  const [loading, setLoading] = useState()
  // Define state for page to fetch next page of movies
  const [page, setPage] = useState(1)

  // Define a function to get the popular movies from the API using axios and the endpoint /movie/popular
  useEffect(() => {
    setLoading(true)
    fetchData(page)
    setLoading(false)
  }, [page, search])

  const fetchData = async page => {
    if (search) {
      axios
        .get(`${BASE_URL}/search/movie`, {
          params: { api_key, query: search, page: page },
        })
        .then(response => {
          setMovies(prevstate => [...prevstate, ...response.data.results])
        })
        .catch(error => console.log(error))
    } else {
      axios
        .get(`${BASE_URL}/movie/popular`, {
          params: { api_key, page: page },
        })
        .then(response => {
          setMovies(prevstate => [...prevstate, ...response.data.results])
        })
        .catch(error => console.log(error))
    }
  }

  // If the loading state is true, return a loading spinner
  if (loading) return <Spinner />

  const loadMore = () => {
    setPage(prevstate => prevstate + 1)
  }

  return (
    <div>
      <div className='container-film'>
        {/* Map over the movies array and render a MovieCard component for each movie */}
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
      <div className='flex items-center justify-center mt-10'>
        <div className='button-center'>
          <button
            className='button'
            onClick={loadMore}
            disabled={page > 15 ? true : false}
          >
            Load More
          </button>
        </div>
      </div>
    </div>
  )
}

export default MoviesGrid
