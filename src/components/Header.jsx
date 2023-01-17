import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import { useUserContext } from '../context/UserContext'

const Header = () => {
  const { user, setUser } = useUserContext()

  const navigate = useNavigate()

  const handleLogout = () => {
    setUser(null)
    navigate('/')
  }

  return (
    <header>
      <nav className='navBar'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
        <a className='icon'>&#9776;</a>
        <div className='container-links'>
          <Link to='/'>Movies</Link>
          <Link to='/watchlist'>Watchlist</Link>
          {user && <Link to='/contact'>Contact</Link>}
        </div>
        <div className='container-login'>
          {user && (
            <Link id='dark-select' to='/profile'>
              Profile
            </Link>
          )}
          {user && (
            <Link id='dark-select-2' onClick={handleLogout}>
              Log out
            </Link>
          )}
          {!user && (
            <Link id='dark-select' to='/login'>
              Log in
            </Link>
          )}
          {!user && (
            <Link id='dark-select-2' to='/signup'>
              Sign up
            </Link>
          )}
        </div>
        <ul>
          <li>
            <Link className='nav-link' to='/'>
              Movies
            </Link>
          </li>
          <li>
            <Link className='nav-link' to='/watchlist'>
              Watchlist
            </Link>
          </li>
          <li>
            <Link className='nav-link' to='/login'>
              Log in
            </Link>
          </li>
          <li>
            <Link className='nav-link' to='/signup'>
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
