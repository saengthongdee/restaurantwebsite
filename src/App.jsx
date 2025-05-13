import { useState } from 'react'
import './App.css'
import Nav from './components/navbar/navbar'; 
import HeroImage from './components/heroimage/heroimage'; 
import About from './components/Abouts/about';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <Nav/>
          <HeroImage/>
          <About/>
      </div>
    </>
  )
}

export default App
