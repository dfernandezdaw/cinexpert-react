import React, { useEffect } from 'react'
import { RxAvatar } from 'react-icons/rx'

const Profile = () => {
  return (
    <div className='container-user-profile'>
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
      <form>
        <label htmlFor='email'>Email Adress</label>
        <input
          type='email'
          name='email   '
          id='email'
          placeholder='Email Address'
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Password'
        />
        {/* radio buttons to select genres Male and Female */}
        <div className='container-radio-buttons'>
          <label>
            <input type='radio' value='Male' />
          </label>
          <label>
            <input type='radio' value='Female' />
          </label>
        </div>

        <input type='submit' value='Save' />
      </form>
    </div>
  )
}

export default Profile
