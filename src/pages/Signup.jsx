import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

const Signup = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [confpassword, setConfPassword] = React.useState('')
  const [terms, setTerms] = React.useState(false)

  const navigate = useNavigate()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmit = e => {
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
      <form id='form' onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='email'>
          <span className='iconify-inline' data-icon='carbon:email'></span>{' '}
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
          <span className='iconify-inline' data-icon='carbon:password'></span>{' '}
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
        <label htmlFor='confpassword'>
          <span className='iconify-inline' data-icon='carbon:password'></span>{' '}
          Confirm password
        </label>
        <input
          type='password'
          {...register('confpassword', {
            required: true,
            minLength: 8,
          })}
          name='confpassword'
          id='confpassword'
          placeholder='Password...'
          onChange={e => setConfPassword(e.target.value)}
        />
        {errors.confpassword?.type === 'required' && (
          <small className='error'>Password is required</small>
        )}
        {errors.confpassword?.type === 'minLength' && (
          <small className='error'>
            Password must be at least 8 characters long
          </small>
        )}
        <br />
        <input
          type='checkbox'
          {...register('terms', {
            required: true,
          })}
          name='terms'
          id='terms'
          onChange={e => setTerms(e.target.checked)}
        />
        <span>
          I agree to<Link to=''>Terms of Service</Link> and
          <Link to=''>Privacy Policy</Link>
        </span>
        <br />
        {errors.terms?.type === 'required' && (
          <small className='error'>You must agree to the terms</small>
        )}
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
