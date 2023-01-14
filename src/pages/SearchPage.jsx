import React from 'react'
import { useSearchParams } from 'react-router-dom'
import MoviesGrid from '../components/MoviesGrid'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { api_key, BASE_URL } from '../api'

const SearchPage = () => {
  const api = axios.create({ baseURL: BASE_URL })
  const [query] = useSearchParams()
  const search =
    query.get('s').charAt(0).toUpperCase() + query.get('s').slice(1) || '' // Capitalize first letter

  axios
    .get(`${BASE_URL}/search/movie`, {
      params: { api_key, query: search },
    })
    .then(response => {
      setMovies(response.data.results)
      setLoading(false)
    })
    .catch(error => console.log(error))

  return (
    <div>
      <h1>Results for: {search}</h1>
      <MoviesGrid search={search} />
    </div>
  )
}

export default SearchPage
