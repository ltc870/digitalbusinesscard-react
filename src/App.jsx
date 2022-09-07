import { useState } from 'react'
import React from "react";
import HeroImage from './components/HeroImage';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {

  return (
    <div className='container'>
      <h1>Hello World!</h1>
      <HeroImage />
      <Main />
      <Footer />
    </div>
  ) 
}

export default App
