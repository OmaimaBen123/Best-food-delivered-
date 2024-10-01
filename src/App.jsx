import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import HeadlineCards from './HeadlineCards/HeadlineCards';

const App = () => {
  return (
    <div>
      <h1 className='text-white'>hi </h1>
      <Navbar />
      <Hero />
      <HeadlineCards/>
    </div>
  )
}

export default App
