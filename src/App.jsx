import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Info from './components/info'

function App() {
  

  return (
    <main>
      <h1>react basics</h1>
      <ul type = 'circle'>
        <li>What is react?</li>
        <li>SPA(Single Page Application), MPA(Multi page Application)</li>
        <li> SSR, <b>CSR</b> & SSG </li>
        <li>jsx - javasciript xml</li>
        <li>React Functional components</li>
      
      </ul>
      <Info />

    </main>
  )
}

export default App
