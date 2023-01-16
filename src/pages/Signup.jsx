import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confpassword, setConfPassword] = React.useState('')
  const [terms, setTerms] = React.useState(false)

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    if (password === confpassword && password.length >= 8 && terms === true) {
      localStorage.setItem('email', email)
      localStorage.setItem('password', password)
      window.alert('You have successfully created an account')
      navigate('/login')
    } else if (terms === false) {
      window.alert('You must agree to the terms and conditions')
    } else if (password !== confpassword) {
      window.alert('Passwords do not match')
    } else if (password.length < 8) {
      window.alert('Password must be at least 8 characters long')
    } else {
      window.alert('Something went wrong')
    }
  }
  return (
    <div className='container-signup'>
      <h3>Create an account</h3>
      <p style={{ marginBottom: '10px' }}>
        Register and gain access to favourites
      </p>
      <form id='form' onSubmit={handleSubmit}>
        <label htmlFor='email'>
          <span className='iconify-inline' data-icon='carbon:email'></span>{' '}
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
          <span className='iconify-inline' data-icon='carbon:password'></span>{' '}
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
        <label htmlFor='confpassword'>
          <span className='iconify-inline' data-icon='carbon:password'></span>{' '}
          Confirm password
        </label>
        <input
          type='password'
          name='confpassword'
          id='confpassword'
          placeholder='Password...'
          onChange={e => setConfPassword(e.target.value)}
          required
        />
        <input
          type='checkbox'
          name='terms'
          id='terms'
          onChange={e => setTerms(e.target.checked)}
          required
        />
        <span>
          I agree to<Link to=''>Terms of Service</Link> and
          <Link to=''>Privacy Policy</Link>
        </span>
        <button className='captcha-button' type='submit'>
          Submit
        </button>
      </form>
      <span>
        Already have an account? <Link to='/login'>Login</Link>
      </span>
    </div>
  )
}

export default Signup
