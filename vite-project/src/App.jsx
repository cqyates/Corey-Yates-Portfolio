import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div id="main">
    <header>
      <h1>Corey Yates Portfolio</h1>
      <nav>
        <ul>
          <li>About Me</li>
          <li>Current Projects</li>
          <li>Technical Skills and Certifications</li>
          <li>My Portfolio</li>
          <li>Resume</li>
          <li>Contact Me</li>
        </ul>
      </nav>
    </header>
  </div>
  )
}

export default App
