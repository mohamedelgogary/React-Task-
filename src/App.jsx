import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Slide from './Component/Slide'
import Section2 from './Component/Section2'
import Section3 from './Component/Section3'
import Section4 from './Component/Section4'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Slide />
      <Section2 />
      <Section3 />
      <Section4 />

    </>
  )
}

export default App
