import { useState } from 'react'
import './App.css'
import Nav from './components/navbar/navbar'; 
import HeroImage from './components/heroimage/heroimage'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <Nav/>
          <HeroImage/>
      </div>
    </>
  )
}

export default App
