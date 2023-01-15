import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const userEmail = localStorage.getItem('email')
    const userPassword = localStorage.getItem('password')

    if (email === userEmail && password === userPassword) {
      window.alert(
        "You are logged in. Unfortunatelly, we don't have a backend yet."
      )
      navigate('/')
    } else {
      window.alert('Wrong email or password')
    }
  }

  return (
    <div className='container-login-user'>
      <h3>Log in</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>
          <span className='iconify-inline' data-icon='carbon:email'></span>
          Email Adress
        </label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='Email Adress...'
          onChange={e => setEmail(e.target.value)}
          required
        />
        <label htmlFor='password'>
          <span className='iconify-inline' data-icon='carbon:password'></span>
          Password
        </label>
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Password...'
          onChange={e => setPassword(e.target.value)}
          required
        />
        <a href=''>Forgot password?</a>
        <br></br>
        <button className='captcha-button-login' type='submit'>
          Log in
        </button>
      </form>
      <span>
        Not a member?<Link to='/'>Sign up</Link>
      </span>
    </div>
  )
}

export default Login
