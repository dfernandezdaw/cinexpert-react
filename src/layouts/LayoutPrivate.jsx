import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useUserContext } from '../context/UserContext'

// Component to display the private layout. This component is used to protect the private routes

const LayoutPrivate = () => {
  const { user } = useUserContext()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  }, [user])

  return (
    <div>
      <Outlet />
    </div>
  )
}

export default LayoutPrivate
