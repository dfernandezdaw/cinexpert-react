import React, { useEffect } from 'react'
import { RxAvatar } from 'react-icons/rx'
import { useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'

// Component to display the profile page with a form to update the user profile. This component uses the react-toastify library and the react-hook-form library for validations

const Profile = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = e => {
    toast.success('Profile updated', {
      position: 'top-center',
      autoClose: 3000,
    })
  }

  return (
    <div className='container-user-profile'>
      <ToastContainer />
      <h2>Account settings</h2>
      <p>Profile picture</p>
      <div className='container-profile-picture'>
        <span
          className='iconify'
          data-icon='carbon:user-avatar-filled'
          style={{ color: '#fd9858', fontSize: '7rem' }}
        >
          <RxAvatar />
        </span>
        <button>Edit picture</button>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='email'>Email Address</label>
        <input
          type='text'
          {...register('email', {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
          })}
          name='email'
          id='email'
          placeholder='Email Address'
          onChange={e => handleChange(e)}
        />
        {errors.email?.type === 'required' && (
          <small className='error'>Email is required</small>
        )}
        {errors.email?.type === 'pattern' && (
          <small className='error'>Email is not valid</small>
        )}
        <br />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          {...register('password', {
            required: true,
            minLength: 8,
          })}
          name='password'
          id='password'
          placeholder='Password'
          onChange={e => handleChange(e)}
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
        <label htmlFor='select'>Gender</label>
        <select {...register('gender')}>
          <option value='female'>Female</option>
          <option value='male'>Male</option>
          <option value='other'>Other</option>
        </select>
        <br />
        <label htmlFor='birthdate'>Birthdate</label>
        <input
          type='date'
          name='birthdate'
          id='birthdate'
          {...register('date', { required: 'Date is required' })}
        />
        <input type='submit' value='Save' />
      </form>
    </div>
  )
}

export default Profile
