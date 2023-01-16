import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const navigate = useNavigate()

  const onSubmit = () => {
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='email'>
          <span className='iconify-inline' data-icon='carbon:email'></span>
          Email Adress
        </label>
        <input
          type='text'
          {...register('email', {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
          })}
          name='email'
          id='email'
          placeholder='Email Adress...'
          onChange={e => setEmail(e.target.value)}
        />
        {errors.email?.type === 'required' && (
          <small className='error'>Email is required</small>
        )}
        {errors.email?.type === 'pattern' && (
          <small className='error'>Email is not valid</small>
        )}
        <label htmlFor='password'>
          <span className='iconify-inline' data-icon='carbon:password'></span>
          Password
        </label>
        <input
          type='password'
          {...register('password', {
            required: true,
            minLength: 8,
          })}
          name='password'
          id='password'
          placeholder='Password...'
          onChange={e => setPassword(e.target.value)}
        />
        {errors.password?.type === 'required' && (
          <small className='error'>Password is required</small>
        )}
        {errors.password?.type === 'minLength' && (
          <small className='error'>
            Password must be at least 8 characters long
          </small>
        )}
        <br />
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
