import { useState } from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import HowWeWork from './Components/HowWeWork'
import OurProject from './Components/OurProject'
import Features from './Components/Features'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Banner/>
     <HowWeWork/>
     <OurProject/>
     <Features/>
    </>
  )
}

export default App
