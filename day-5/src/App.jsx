import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Status from './StatusBox'

function App() {
  return (
    <Status online={false}></Status>
  )
}

export default App
