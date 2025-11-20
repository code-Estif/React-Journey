import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MoodBox from './MoodBox'

function App() {
     return (
      <div>
        <MoodBox happy={true} />
        <MoodBox happy={false} />
      </div>
     )
  }

export default App
