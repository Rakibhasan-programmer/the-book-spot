import React from 'react';
import Header from './Components/Header/Header';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className='w-[94%] mx-auto'>
      <Header />
      <Outlet />
    </div>
  );
};

export default App;