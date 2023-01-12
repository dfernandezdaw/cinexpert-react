import { createBrowserRouter } from 'react-router-dom'
import LayoutPublic from '../layouts/LayoutPublic'
import Home from '../pages/Home'
import MovieDetails from '../pages/MovieDetails'
import NotFound from '../pages/NotFound'

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
    ],
  },
])
