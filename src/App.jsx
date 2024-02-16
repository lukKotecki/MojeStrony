import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  

  return (
    <div className='body-container'>
      <Header />
      <main className='main-container grid-container'>
        <div className='grid-item'>
            To   jest main container
        </div>
        <div className='grid-item'>
            To   jest main container
        </div>
        <div className='grid-item'>
            To   jest main container
        </div>
        <div className='grid-item'>
            To   jest main container
        </div>
        <div className='grid-item'>
            To   jest main container
        </div>
        <div className='grid-item'>
            To   jest main container
        </div>
        <div className='grid-item'>
            To   jest main container
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
