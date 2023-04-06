import React from 'react'
import Nav from './components/Nav.jsx'
import { Routes, Route } from 'react-router-dom'
import Pokemon from './views/Pokemon.jsx'


export default function App() {
  
  return (
    <>
      <Nav/>
      <div className='container bg-warning pb-5'>
      <h1 className='text-center py-5'>Welcome to PokeInfo</h1> 
        <Routes>
            <Route path='/src/views/Pokemon.jsx' element={<Pokemon/>}/>
        </Routes>
      </div>
    </>
  )
}