import { useState, useEffect} from 'react'
import './App.css'
import Nav from './components/navbar/navbar'; 
import HeroImage from './components/heroimage/heroimage'; 
import About from './components/Abouts/about';
import Menu from './components/menu/menu';
import Booking from './components/booking/booking';
import Footer from './components/footer/footer';
function App() {
  const [count, setCount] = useState(0)

    useEffect(() => {
    if (window.innerWidth < 768) {
      alert("This site is available only on iPad or larger devices.");
      window.location.href = "/not-supported";
    }
  }, []);

  return (
    <>
      <div>
          <Nav/>
          <HeroImage/>
          <About/>
          <Menu />
          <Booking/>
          <Footer/>
      </div>
    </>
  )
}

export default App
