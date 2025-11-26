import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HobbyList from './Components/HobbiesCard'
import Skill from './Components/Skills'

function App() {
  return (
    <div className='card-container'>
       <HobbyList/>
       <Skill/>
    </div>
  )
}

export default App
