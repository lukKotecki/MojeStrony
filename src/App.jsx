import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Login from './pages/Login'
import Moje from './pages/Moje'

function App() {
  

  return (
    <div className='page-container'>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} >
            <Route path='/' element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='moje' element={<Moje />} />
            <Route path='login' element={<Login />} />
            

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
