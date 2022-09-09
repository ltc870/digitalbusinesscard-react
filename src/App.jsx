import { useState } from 'react'
import React from "react";
import HeroImage from './components/HeroImage';
import Main from './components/Main';
import Footer from './components/Footer';
import professional from "./images/professional.jpeg";


function App() {
  const image = professional
  return (
    <div className='container'>
      <HeroImage src={image}/>
      <Main />
      <Footer />
    </div>
  ) 
}

export default App
