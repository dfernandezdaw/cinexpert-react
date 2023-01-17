import React from 'react'
import MovieCard from './MovieCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { api_key, BASE_URL } from '../api'
import Spinner from '../components/Spinner'

const MoviesGrid = ({ search, watchlist }) => {
  // Define state for movies
  const [movies, setMovies] = useState([])
  // Define state for loading
  const [loading, setLoading] = useState(false)
  // Define state for page to fetch next page of movies
  const [page, setPage] = useState(1)
  // Define state for genre to filter movies by genre
  const [genre, setGenre] = useState('')
  // Define state for release date to filter movies by release date
  const [releaseDate, setReleaseDate] = useState('')
  // Define state for sort by to sort movies by popularity, release date, revenue, primary release date, original title, vote average, vote count
  const [sortBy, setSortBy] = useState('')
  // Define state to filter by upcoming movies and top rated movies
  const [filter, setFilter] = useState('')

  // Show spinner while loading
  if (loading) return <Spinner />

  // Define a function to get the popular movies from the API using axios and the endpoint /movie/popular
  useEffect(() => {
    setLoading(true)
    fetchData(page)
    setLoading(false)
  }, [page, search, genre, releaseDate, sortBy, filter])

  const fetchData = async page => {
    if (search) {
      await axios
        .get(`${BASE_URL}/search/movie`, {
          params: { api_key, query: search, page: page },
        })
        .then(response => {
          setMovies(prevstate => [...prevstate, ...response.data.results])
        })
        .catch(error => console.log(error))
    } else if (watchlist) {
      setMovies(watchlist)
    } else if (genre) {
      await axios
        .get(`${BASE_URL}/discover/movie`, {
          params: { api_key, with_genres: genre, page: page },
        })
        .then(response => {
          setMovies(prevstate => [...prevstate, ...response.data.results])
        })
        .catch(error => console.log(error))
    } else if (releaseDate) {
      await axios
        .get(`${BASE_URL}/discover/movie`, {
          params: { api_key, primary_release_year: releaseDate, page: page },
        })
        .then(response => {
          setMovies(prevstate => [...prevstate, ...response.data.results])
        })
        .catch(error => console.log(error))
    } else if (sortBy) {
      await axios
        .get(`${BASE_URL}/discover/movie`, {
          params: { api_key, sort_by: sortBy, page: page },
        })
        .then(response => {
          setMovies(prevstate => [...prevstate, ...response.data.results])
        })
        .catch(error => console.log(error))
    } else if (filter === 'upcoming') {
      await axios
        .get(`${BASE_URL}/movie/upcoming`, {
          params: { api_key, page: page },
        })
        .then(response => {
          setMovies(prevstate => [...prevstate, ...response.data.results])
        })
        .catch(error => console.log(error))
    } else if (filter === 'top_rated') {
      await axios
        .get(`${BASE_URL}/movie/top_rated`, {
          params: { api_key, page: page },
        })
        .then(response => {
          setMovies(prevstate => [...prevstate, ...response.data.results])
        })
        .catch(error => console.log(error))
    } else {
      await axios
        .get(`${BASE_URL}/movie/popular`, {
          params: { api_key, page: page },
        })
        .then(response => {
          setMovies(prevstate => [...prevstate, ...response.data.results])
        })
        .catch(error => console.log(error))
    }
  }

  const loadMore = () => {
    setPage(prevstate => prevstate + 1)
  }

  return (
    <div>
      {/* Select to filter by genre */}
      <select
        className='select'
        onChange={e => {
          setGenre(e.target.value)
          setMovies([])
          setPage(1)
        }}
      >
        <option value=''>All</option>
        <option value='28'>Action</option>
        <option value='12'>Adventure</option>
        <option value='16'>Animation</option>
        <option value='35'>Comedy</option>
        <option value='80'>Crime</option>
        <option value='99'>Documentary</option>
        <option value='18'>Drama</option>
        <option value='10751'>Family</option>
        <option value='14'>Fantasy</option>
        <option value='36'>History</option>
        <option value='27'>Horror</option>
        <option value='10402'>Music</option>
        <option value='9648'>Mystery</option>
        <option value='10749'>Romance</option>
        <option value='878'>Science Fiction</option>
        <option value='10770'>TV Movie</option>
        <option value='53'>Thriller</option>
        <option value='10752'>War</option>
        <option value='37'>Western</option>
      </select>
      {/* Select to filter by year */}
      <select
        className='select'
        onChange={e => {
          setReleaseDate(e.target.value)
          setMovies([])
          setPage(1)
        }}
      >
        <option value=''>All</option>
        <option value='2020'>2020</option>
        <option value='2019'>2019</option>
        <option value='2018'>2018</option>
        <option value='2017'>2017</option>
        <option value='2016'>2016</option>
        <option value='2015'>2015</option>
        <option value='2014'>2014</option>
        <option value='2013'>2013</option>
        <option value='2012'>2012</option>
        <option value='2011'>2011</option>
        <option value='2010'>2010</option>
        <option value='2009'>2009</option>
        <option value='2008'>2008</option>
        <option value='2007'>2007</option>
        <option value='2006'>2006</option>
        <option value='2005'>2005</option>
        <option value='2004'>2004</option>
        <option value='2003'>2003</option>
        <option value='2002'>2002</option>
        <option value='2001'>2001</option>
        <option value='2000'>2000</option>
        <option value='1999'>1999</option>
        <option value='1998'>1998</option>
        <option value='1997'>1997</option>
        <option value='1996'>1996</option>
        <option value='1995'>1995</option>
        <option value='1994'>1994</option>
        <option value='1993'>1993</option>
        <option value='1992'>1992</option>
        <option value='1991'>1991</option>
        <option value='1990'>1990</option>
      </select>
      {/* Select to filter by sort by */}
      <select
        className='select'
        onChange={e => {
          setSortBy(e.target.value)
          setMovies([])
          setPage(1)
        }}
      >
        <option value=''>All</option>
        <option value='popularity.desc'>Popularity Descending</option>
        <option value='popularity.asc'>Popularity Ascending</option>
        <option value='vote_average.desc'>Rating Descending</option>
        <option value='vote_average.asc'>Rating Ascending</option>
        <option value='release_date.desc'>Release Date Descending</option>
        <option value='release_date.asc'>Release Date Ascending</option>
      </select>
      {/* Select to filter by top rated or upcoming */}
      <select
        className='select'
        onChange={e => {
          setFilter(e.target.value)
          setMovies([])
          setPage(1)
        }}
      >
        <option value=''>All</option>
        <option value='top_rated'>Top Rated</option>
        <option value='upcoming'>Upcoming</option>
      </select>

      <div className='container-film'>
        {/* Map over the movies array and render a MovieCard component for each movie */}
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
      <div className='flex items-center justify-center mt-10'>
        {/* if there is watchlist dont render the button */}
        {watchlist ? null : (
          <div className='button-center'>
            <button
              className='button'
              onClick={loadMore}
              disabled={page > 15 ? true : false}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default MoviesGrid
