import React from 'react'
import logo from '../assets/img/logo.png'

const Header = () => {
  return (
    <header>
      <nav className='navBar'>
        <a href='index.html'>
          <img src={logo} alt='logo' />
        </a>
        <a className='icon'>&#9776;</a>
        <div className='container-links'>
          <a href='index.html'>Movies</a>
          <a href='tvshows.html'>TV Shows</a>
        </div>
        <div className='container-login'>
          <a id='dark-select' href='login.html'>
            Log in
          </a>
          <a id='dark-select-2' href='signup.html'>
            Sign up
          </a>
        </div>
        <ul>
          <li>
            <a className='nav-link' href='index.html'>
              Movies
            </a>
          </li>
          <li>
            <a className='nav-link' href='tvshows.html'>
              TV Shows
            </a>
          </li>
          <li>
            <a className='nav-link' href='login.html'>
              Log in
            </a>
          </li>
          <li>
            <a className='nav-link' href='signup.html'>
              Sign up
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
