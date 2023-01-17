import React from 'react'
import { AiOutlineMail, AiOutlineMessage } from 'react-icons/ai'
import { RxAvatar } from 'react-icons/rx'
import { useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm()

  const onSubmit = () => {
    toast.success('Message sent', {
      position: 'top-center',
      autoClose: 3000,
    })
  }

  return (
    <div className='container-contact'>
      <ToastContainer />
      <h3>Contact support</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='email'>
          <span className='iconify-inline' data-icon='carbon:email'>
            <AiOutlineMail />
          </span>
          Email Address
        </label>
        <input
          type='text'
          {...register('email', {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
          })}
          name='email'
          id='email'
          placeholder='Your Email'
        />
        {errors.email?.type === 'required' && (
          <small className='error'>Email is required</small>
        )}
        {errors.email?.type === 'pattern' && (
          <small className='error'>Email is not valid</small>
        )}
        <br />
        <label htmlFor='subject'>
          <span className='iconify-inline' data-icon='bx:user'>
            <RxAvatar />
          </span>
          Subject
        </label>
        <input
          type='text'
          {...register('subject', {
            required: true,
            minLength: 3,
            maxLength: 20,
          })}
          name='subject'
          id='subject'
          placeholder='Your Subject'
        />
        {errors.subject?.type === 'required' && (
          <small className='error'>Subject is required</small>
        )}
        {errors.subject?.type === 'minLength' && (
          <small className='error'>Subject must be at least 3 characters</small>
        )}
        {errors.subject?.type === 'maxLength' && (
          <small className='error'>
            Subject must be less than 20 characters
          </small>
        )}
        <br />
        <label htmlFor='message'>
          <span
            className='iconify-inline'
            data-icon='ant-design:message-outlined'
          >
            <AiOutlineMessage />
          </span>
          Message
        </label>
        <textarea
          name='message'
          {...register('message', {
            required: true,
            minLength: 10,
            maxLength: 100,
          })}
          id='message'
          cols='45'
          rows='15'
          placeholder='Your Message'
        ></textarea>
        {errors.message?.type === 'required' && (
          <small className='error'>Message is required</small>
        )}
        {errors.message?.type === 'minLength' && (
          <small className='error'>
            Message must be at least 10 characters
          </small>
        )}
        {errors.message?.type === 'maxLength' && (
          <small className='error'>
            Message must be less than 100 characters
          </small>
        )}
        <br />
        <label htmlFor='checkbox'>
          Add phone number?
          <input
            type='checkbox'
            name='checkbox'
            id='checkbox'
            {...register('addphone')}
          />
        </label>
        {watch('addphone') && (
          <input
            type='tel'
            name='phone'
            id='phone'
            placeholder='Your phone number'
            {...register('phone', {
              required: true,
              maxLenght: 10,
              pattern: /^[0-9]*$/i,
            })}
          />
        )}
        {errors.phone?.type === 'required' && (
          <small className='error'>Phone number is required</small>
        )}
        {errors.phone?.type === 'maxLength' && (
          <small className='error'>Phone number must be 10 digits</small>
        )}
        {errors.phone?.type === 'pattern' && (
          <small className='error'>Phone number must be digits</small>
        )}
        <br />
        <button className='captcha-button-contact' type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact
