import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import LandingPage from "./nav"
import Navbar from "./nav"
import HeroSection from './hero'
import WhyChoose from './hero02'
import Footer from "./footer"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    
    {/* <LandingPage/> */}

     <HeroSection/>
    <Navbar/>
    <WhyChoose/>
    <Footer/>
  </StrictMode>,
)
