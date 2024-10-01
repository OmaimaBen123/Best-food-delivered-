import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import HeadlineCards from './components/HeadlineCards/HeadlineCards';
import Food from './components/Food/Food';

const App = () => {
  return (
    <div>
      <h1 className='text-white'>hi </h1>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food/>
    </div>
  )
}

export default App
