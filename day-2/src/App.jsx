import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from "./Components/ProfileCard"

function App() {
  return (
    <div>
      <h1>Props Practice</h1>
      <ProfileCard name="Estif" role="Frontend Developer" city="Debre Markos" />
    </div>
  )
}
export default App

