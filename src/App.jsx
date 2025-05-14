import { useState } from 'react'
import './App.css'
import Nav from './components/navbar/navbar'; 
import HeroImage from './components/heroimage/heroimage'; 
import About from './components/Abouts/about';
import Menu from './components/menu/menu';
import Booking from './components/booking/booking';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <Nav/>
          <HeroImage/>
          <About/>
          <Menu />
          <Booking/>
      </div>
    </>
  )
}

export default App
