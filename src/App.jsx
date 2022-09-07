import { useState } from 'react'
import React from "react";
import HeroImage from './components/HeroImage';
import Main from './components/Main';

function App() {

  return (
    <div className='container'>
      <h1>Hello World!</h1>
      <HeroImage />
      <Main />
    </div>
  ) 
}

export default App
