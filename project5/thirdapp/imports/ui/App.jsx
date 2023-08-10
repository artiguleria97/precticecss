import React from 'react';
import './app.css';
import Hero from './components/hero/Hero';
import Programs from './components/programs/Programs';
import Reasons from './components/reasons/Reasons';
import Plans from './components/plans/Plans';

export const App = () => {
  return(
    <div className='App'>
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
    </div>
    );
}

