import React, { useEffect } from 'react'
import styles from './Search.module.css'
import { FaSearch } from 'react-icons/fa'
import { useSearchParams } from 'react-router-dom'

const Search = () => {
  const [query, setQuery] = useSearchParams()
  const search = query.get('search')

  const [searchValue, setSearchValue] = React.useState('')

  // Update the search query when the search value changes and set it to an empty string when the component unmounts
  useEffect(() => {
    setSearchValue(search ?? '')
  }, [search])

  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <form className={styles.searchContainer} onSubmit={handleSubmit}>
      <div className={styles.searchBox}>
        <input
          className={styles.searchInput}
          type='text'
          value={search ?? ''}
          autoFocus
          placeholder='Search...'
          aria-label='Search Movies'
          onChange={e => {
            const value = e.target.value

            setQuery({ search: value })
          }}
        />
        <FaSearch size={20} color='black' className={styles.searchButton} />
      </div>
    </form>
  )
}

export default Search
