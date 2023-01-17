import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/styles/style.scss' // Importing SCSS file
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import UserProvider from './context/UserContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
)
