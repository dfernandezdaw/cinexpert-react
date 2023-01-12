import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { api_key, BASE_URL } from '../api'

const TvShowDetails = () => {
  const [tvshow, setTvShow] = useState(null)
  const [cast, setCast] = useState(null)
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

  if (!tvshow || !cast) return null

  const { original_name, poster_path, overview, created_by } = tvshow

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
          {poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={original_name}
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
