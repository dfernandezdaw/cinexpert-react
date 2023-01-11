import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import MoviesGrid from './components/MoviesGrid'
import LandingPage from './pages/LandingPage'
import MovieDetails from './pages/MovieDetails'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/movie/:movieId' element={<MovieDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
    /*     <div>
      <Header />
      <main>
        <h1>Movies</h1>
        <MoviesGrid />
      </main>
    </div> */
  )
}

export default App
