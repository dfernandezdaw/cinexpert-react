import React from 'react'
import TvShowCard from './TvShowCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { api_key, BASE_URL } from '../api'

const TvShowGrid = () => {
  // Define state for tvshows
  const [tvshows, setTvShows] = useState([])

  // Create an instance of axios with the base URL
  const api = axios.create({ baseURL: BASE_URL })

  // Define a function to get the popular tvshows from the API using axios and the endpoint /tv/popular
  const getTvShows = api.get('/tv/popular', { params: { api_key } })

  // Call the function to get the popular tvshows and set the state with the response
  useEffect(() => {
    getTvShows
      // Axios return an object response and our json is in data property
      .then(response => setTvShows(response.data.results))
      .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <h1>TV Shows</h1>
      <div className='container-film'>
        {/* Map over the tvshows array and render a TvShowCard component for each movie */}
        {tvshows.map(tvshow => (
          <TvShowCard key={tvshow.id} tvshow={tvshow} />
        ))}
      </div>
    </div>
  )
}

export default TvShowGrid
