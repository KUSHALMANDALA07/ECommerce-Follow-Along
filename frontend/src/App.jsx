import { useState } from 'react'
 //import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Products from './components/Products'

function App() {
  

  return (
    <>
      <Products/>
      <Login/>
      <Signup/>
    </>
  )
}

export default App
