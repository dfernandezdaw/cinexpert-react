import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
//import Swal from 'sweetalert2'
import { useUserContext } from '../context/UserContext'
import { useForm } from 'react-hook-form'

const Login = () => {
  const dataInitialState = {
    email: '',
    password: '',
  }
  const { user, setUser } = useUserContext()
  const [users, setUsers] = useState([])
  const [data, setData] = useState(dataInitialState)
  const [error, setError] = useState(null)
  const [esregistro, setEsregistro] = useState(false)

  const navigate = useNavigate()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const onSubmit = e => {
    const { email, password } = data

    const userEmail = localStorage.getItem('email')
    const userPassword = localStorage.getItem('password')

    if (email === userEmail && password === userPassword) {
      window.alert(
        "You are logged in. Unfortunatelly, we don't have a backend yet."
      )
      login()
      navigate('/')
    } else {
      window.alert('Wrong email or password')
    }
  }

  const registrar = async () => {
    console.log('Registrando...')
    Swal.fire({
      title: 'Éxito',
      text: 'Usuario registrado',
      icon: 'success',
    })
    setUsers([...users, data])
    setData(dataInitialState)
    setError(null)
    setUser(true)
    navigate('/watchlist')
  }

  const login = async () => {
    console.log('Logueando...')
    // Validamos el user
    setUser(true)
    setData(dataInitialState)
    setError(null)
    navigate('/watchlist')
  }

  const handleChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    })
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
          onChange={e => handleChange(e)}
          value={data.email}
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
          placeholder='password...'
          onChange={e => handleChange(e)}
          value={data.password}
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
