import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

// Component to display the public layout. This component is used to protect the public routes

const LayoutPublic = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default LayoutPublic
