import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AnimalsList from "./List";

function App() {
  return (
    <div className='list'>
      <h1>Animals</h1>
      <AnimalsList />
    </div>
  );
}

export default App;

