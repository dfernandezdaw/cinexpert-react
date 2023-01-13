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
  const [loading, setLoading] = useState(true)

  // Create an instance of axios with the base URL
  const api = axios.create({ baseURL: BASE_URL })

  // Define a function to get the popular movies from the API using axios and the endpoint /movie/popular
  const getMovies = api.get('/movie/popular', { params: { api_key } })

  const getSearch = api.get('/search/movie', {
    params: { api_key, query: search },
  })

  // Call the function to get the popular movies and set the state with the response
  useEffect(() => {
    setLoading(true)
    search
      ? getSearch
          .then(response => {
            setMovies(response.data.results)
            setLoading(false)
          })
          .catch(error => console.log(error))
      : getMovies
          // Axios return an object response and our json is in data property
          .then(response => {
            setMovies(response.data.results)
            setLoading(false)
          })
          .catch(error => console.log(error))
  }, [search])

  // If the loading state is true, return a loading spinner
  if (loading) return <Spinner />

  return (
    <div className='container-film'>
      {/* Map over the movies array and render a MovieCard component for each movie */}
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default MoviesGrid
