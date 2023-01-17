import React from 'react'
import { useNavigate } from 'react-router-dom'
import { BiSearchAlt2 } from 'react-icons/bi'
import styles from './SearchBar.module.css'

// Component to display a search bar with a search button

const SearchBar = () => {
  const [search, setSearch] = React.useState('')
  const navigate = useNavigate()

  // Function to handle the search form submission and navigate to the search page
  const handleSubmit = e => {
    e.preventDefault()
    if (!search) return
    navigate(`/search?s=${search}`)
    setSearch('') // Clear the search input
  }

  return (
    <form onSubmit={handleSubmit} className={styles.searchContainer}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type='text'
          placeholder='Search...'
          onChange={e => setSearch(e.target.value)}
          value={search}
        />
        <button type='submit' className={styles.searchButton}>
          <BiSearchAlt2 />
        </button>
      </div>
    </form>
  )
}

export default SearchBar
