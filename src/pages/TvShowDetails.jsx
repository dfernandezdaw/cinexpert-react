import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api_key, BASE_URL } from '../api'

const TvShowDetails = () => {
  const [tvshow, setTvShow] = useState([])
  const [cast, setCast] = useState([])
  // Get the tvshow id from the url params
  const { tvshowId } = useParams()
  const api = axios.create({ baseURL: BASE_URL })

  const getTvShow = api.get(`/tv/${tvshowId}`, { params: { api_key } })
  const getCast = api.get(`/tv/${tvshowId}/credits`, {
    params: { api_key },
  })

  useEffect(() => {
    getTvShow
      .then(response => setTvShow(response.data))
      .catch(error => console.log(error))

    getCast
      .then(response => setCast(response.data))
      .catch(error => console.log(error))
  }, [])

  const { original_name, poster_path, overview, created_by } = tvshow

  const { crew } = cast

  // Get the created by from tvshows array
  const createdBy =
    created_by && created_by.map(creator => creator.name).join(', ')
  // Get the cast names from the cast array and join them with a comma
  const castList = cast.cast && cast.cast.map(cast => cast.name).join(', ')

  return (
    <div>
      <main>
        <h1>{original_name}</h1>
        <div className='container-sinopsis'>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={original_name}
          />
          <div className='info'>
            <h2>Created by</h2>
            <span>{createdBy}</span>
            <h2>Storyline</h2>
            <span>{overview}</span>
            <h2>Cast</h2>
            <span>{castList}</span>
          </div>
        </div>
      </main>
    </div>
  )
}

export default TvShowDetails
