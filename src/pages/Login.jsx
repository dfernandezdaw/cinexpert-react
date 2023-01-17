import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useUserContext } from '../context/UserContext'
import { useForm } from 'react-hook-form'
import { AiOutlineMail, AiOutlineUnlock } from 'react-icons/ai'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
      toast.success(
        "You are logged in. Unfortunatelly, we don't have a backend yet.",
        {
          position: 'top-center',
          autoClose: 3000,
        }
      )
      setTimeout(() => {
        login()
        navigate('/')
      }, 4000)
    } else {
      toast.error('Wrong email or password', {
        position: 'top-center',
      })
    }
  }

  const login = async () => {
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
    <>
      <ToastContainer limit={1} />
      <div className='container-login-user'>
        <h3>Log in</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor='email'>
            <span className='iconify-inline' data-icon='carbon:email'>
              <AiOutlineMail />
            </span>
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
            <span className='iconify-inline' data-icon='carbon:password'>
              <AiOutlineUnlock />
            </span>
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
    </>
  )
}

export default Login
