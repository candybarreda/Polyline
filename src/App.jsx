import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Properties from "./components/Properties"
import Footer from "./components/Footer"
import WhatsappButton from "./components/WhatsappButton"
import Nosotros from "./components/Nosotros"
import Contacto from "./components/Contacto"


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Nosotros />
      <Properties />
      <Footer/>
      <WhatsappButton />
      

    
      
    </div>
  )
}

export default App