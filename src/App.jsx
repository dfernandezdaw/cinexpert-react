import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Index from './pages/Index'
import MovieDetails from './pages/MovieDetails'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Index />} />
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
