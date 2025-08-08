import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Info from './components/info'
import Counter from './components/Counter'

function App() {
  

  return (
    <main>
      <h1>react basics</h1>
      <ul type = 'circle'>
        <li>What is react?</li>
        <li>SPA(Single Page Application), MPA(Multi page Application)</li>
        <li> SSR - Server side rendering, <b>CSR - client side rendering</b> & SSG </li>
        <li>jsx - javasciript xml</li>
        <li>React Functional components</li>
        <li>Props (properties)</li>
        <li> DOM - document object model </li>
        <li>VDOM (Virtual DOM) -,defing algorithm - to find the changed part in old virtual dom and updated dom , reconciliation- these complete process</li>
        <li>Hooks: predefined special fns - help to use certain react features - state management </li>
          <ul>
          <li>useState</li>
          <li>useEffect</li>
          
        </ul>
      </ul>

      {/* <Info name = {'Alice'} email = {'alice@gmail.com'} phone = {'9875678760'} /> */}
      {/* <Info name = {'Biwash'} email = {'bibas@gmail.com'} phone = {'9875678760'} /> */}
      <Counter />
 
    </main>
  )
}

export default App
