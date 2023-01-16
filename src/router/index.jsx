import { createBrowserRouter } from 'react-router-dom'
import LayoutPublic from '../layouts/LayoutPublic'
import Home from '../pages/Home'
import MovieDetails from '../pages/MovieDetails'
import TvShowDetails from '../pages/TvShowDetails'
import NotFound from '../pages/NotFound'
import TvShows from '../pages/TvShows'
import SearchPage from '../pages/SearchPage'
import Login from '../pages/Login'
import Watchlist from '../pages/Watchlist'
import Signup from '../pages/Signup'

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
        path: '/tvshows',
        element: <TvShows />,
      },
      {
        path: '/tvshow/:tvshowId',
        element: <TvShowDetails />,
      },
      {
        path: '/search',
        element: <SearchPage />,
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
        path: '/watchlist',
        element: <Watchlist />,
      },
    ],
  },
])
