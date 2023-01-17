import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api_key, BASE_URL } from '../api'
import Spinner from '../components/Spinner'
import { FaHeart, FaRegHeart, FaStar } from 'react-icons/fa'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useUserContext } from '../context/UserContext'

// Component to display the movie details page and handle the add to watchlist process

const MovieDetails = () => {
  // Define state for movie and cast
  const [movie, setMovie] = useState([])
  const [cast, setCast] = useState([])

  // Define state for loading
  const [loading, setLoading] = useState(true)

  // Usercontext
  const { user, setUser } = useUserContext()

  // Get the movie id from the URL params using the useParams hook from react-router-dom. The movieId is defined in the path of the route in router/index.jsx
  const { movieId } = useParams()

  // Create an instance of axios with the base URL, we will use this instance to make the requests to the API adding /movie/${movieId}
  const api = axios.create({ baseURL: BASE_URL })
  const getMovie = api.get(`/movie/${movieId}`, { params: { api_key } })
  const getCast = api.get(`/movie/${movieId}/credits`, {
    params: { api_key },
  })

  // Call the functions to get the movie and cast and set the state with the response
  useEffect(() => {
    setLoading(true)
    getMovie
      .then(response => {
        setMovie(response.data)
      })
      .catch(error => console.log(error))

    getCast
      .then(response => {
        setCast(response.data)
        setLoading(false)
      })
      .catch(error => console.log(error))
  }, [movieId])

  const [watchlist, setWatchlist] = useState(false)

  // Check if the movie is in the watchlist and set the state to true or false
  useEffect(() => {
    // Get the watchlist from local storage
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || []
    // Check if the movie is in the watchlist
    const isWatchlist = watchlist.find(item => item.id === movie.id)
    isWatchlist ? setWatchlist(true) : setWatchlist(false)
  }, [movie])

  // Timer event to show a toast message if the user is not logged in
  useEffect(() => {
    const timer = setTimeout(() => {
      if (user) return
      toast('Login to add new movies to the watchlist!', {
        position: 'top-center',
      })
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  // If the loading state is true, return a loading spinner
  if (loading) return <Spinner />

  // Destructure the movie object to get the properties we need
  const { original_title, poster_path, overview } = movie
  const { crew } = cast

  // Get the director name from the crew array and filter by job === 'Director'
  const director = crew && crew.find(crew => crew.job === 'Director').name
  // Get the cast names from the cast array and join them with a comma
  const castList = cast.cast && cast.cast.map(cast => cast.name).join(', ')

  // Handle the watchlist button to add or remove the movie from the watchlist
  const handleWatchlist = () => {
    // Get the watchlist from local storage
    const watchlist = JSON.parse(localStorage.getItem('watchlist')) || []
    // Check if the movie is in the watchlist
    const isWatchlist = watchlist.find(item => item.id === movie.id)
    // If the movie is in the watchlist, remove it from the watchlist and update the local storage
    if (isWatchlist) {
      // Filter the all the movies in the watchlist except the one we want to remove and save it in a new array called newWatchlist
      const newWatchlist = watchlist.filter(item => item.id !== movie.id)
      // Update the local storage
      localStorage.setItem('watchlist', JSON.stringify(newWatchlist))
      setWatchlist(false)
    } else {
      // If the movie is not in the watchlist, add it to the watchlist and update the local storage
      watchlist.push(movie)
      localStorage.setItem('watchlist', JSON.stringify(watchlist))
      setWatchlist(true)
    }
  }

  return (
    <div>
      <ToastContainer limit={1} />
      <main>
        <h1>{original_title}</h1>
        <div className='container-sinopsis'>
          {poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={original_title}
            />
          ) : (
            <svg
              id='glyphicons-basic'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 32 32'
            >
              <path
                fill='#b5b5b5'
                id='picture'
                d='M27.5,5H4.5A1.50008,1.50008,0,0,0,3,6.5v19A1.50008,1.50008,0,0,0,4.5,27h23A1.50008,1.50008,0,0,0,29,25.5V6.5A1.50008,1.50008,0,0,0,27.5,5ZM26,18.5l-4.79425-5.2301a.99383.99383,0,0,0-1.44428-.03137l-5.34741,5.34741L19.82812,24H17l-4.79291-4.793a1.00022,1.00022,0,0,0-1.41418,0L6,24V8H26Zm-17.9-6a2.4,2.4,0,1,1,2.4,2.4A2.40005,2.40005,0,0,1,8.1,12.5Z'
              />
            </svg>
          )}
          <div className='info'>
            <span>
              <FaStar style={{ marginRight: '0.5rem' }} />
              {movie.vote_average}
            </span>
            <span style={{ marginLeft: '2rem' }}>
              Released: {movie.release_date}
            </span>
            <span style={{ marginLeft: '2rem' }}>{movie.runtime} min</span>
            <h2>Director</h2>
            <span>{director}</span>
            <h2>Storyline</h2>
            <span>{overview}</span>
            <h2>Cast</h2>
            <span>{castList}</span>
            {
              // If the movie is in the watchlist of localStorage, show the remove button, otherwise show the add button
            }
            {user && (
              <div className='button-center'>
                {watchlist ? (
                  <button className='button' onClick={handleWatchlist}>
                    <FaHeart /> Remove from watchlist
                  </button>
                ) : (
                  <button className='button' onClick={handleWatchlist}>
                    <FaRegHeart /> Add to watchlist
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default MovieDetails
