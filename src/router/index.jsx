import { createBrowserRouter } from 'react-router-dom'
import LayoutPublic from '../layouts/LayoutPublic'
import Home from '../pages/Home'
import MovieDetails from '../pages/MovieDetails'
import NotFound from '../pages/NotFound'
import SearchPage from '../pages/SearchPage'
import Login from '../pages/Login'
import Watchlist from '../pages/Watchlist'
import Signup from '../pages/Signup'
import LayoutPrivate from '../layouts/LayoutPrivate'
import Profile from '../pages/Profile'
import Contact from '../pages/Contact'

// Router configuration

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/movie/:movieId',
        element: <MovieDetails />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/search',
        element: <SearchPage />,
      },
      {
        path: '/profile',
        element: <LayoutPrivate />,
        children: [
          {
            index: true,
            element: <Profile />,
          },
        ],
      },
      {
        path: '/contact',
        element: <LayoutPrivate />,
        children: [
          {
            index: true,
            element: <Contact />,
          },
        ],
      },
      {
        path: '/watchlist',
        element: <LayoutPrivate />,
        children: [
          {
            index: true,
            element: <Watchlist />,
          },
        ],
      },
    ],
  },
])
