import React from 'react'
import { useSearchParams } from 'react-router-dom'
import MoviesGrid from '../components/MoviesGrid'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { api_key, BASE_URL } from '../api'

// Component to display the search page with the search value and the movies grid

const SearchPage = () => {
  const api = axios.create({ baseURL: BASE_URL })

  // Get the search value from the URL capitalizing the first letter to print it in the page and send it to the MoviesGrid component
  const [query] = useSearchParams()
  const search =
    query.get('s').charAt(0).toUpperCase() + query.get('s').slice(1) || '' // Capitalize first letter

  return (
    <div>
      <h1>Results for: {search}</h1>
      <MoviesGrid search={search} />
    </div>
  )
}

export default SearchPage
