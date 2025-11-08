import { useState } from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import HowWeWork from './Components/HowWeWork'
import OurProject from './Components/OurProject'
import Features from './Components/Features'
import Clients from './Components/Clients'
import Questions from './Components/Questions'
import SendInquiry from './Components/SendInquiry'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Banner/>
     <HowWeWork/>
     <OurProject/>
     <Features/>
     <Clients/>
     <Questions/>
     <SendInquiry/>
    </>
  )
}

export default App
