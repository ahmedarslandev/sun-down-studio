import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import ScrollTrigger from 'gsap/ScrollTrigger'
import gsap from 'gsap'
gsap.registerPlugin(ScrollTrigger)
import { Navbar, Section1, Section2, Section3, Section4, Section5, Section6, Section7, Footer, FooterLinks } from './Components/exports'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />

    </>
  )
}

export default App
