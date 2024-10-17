

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landingpage from './Pages/Landingpage';
import { Solution } from './Pages/Solution';
import { Features } from './Pages/Features';
import { Learn } from './Pages/Learn';
import { MarketPlace } from './Pages/MarketPlace';
import { Pricing } from './Pages/Pricing';
import { Customers } from './Pages/Customers';
import { Partners } from './Pages/Partners';
import { Login } from './Pages/Login';
import { ErrorPage } from './Pages/ErrorPage';
import { GetStarted } from './Pages/GetStarted';
import { SeeDemo } from './Pages/SeeDemo';
import Header from './Components/Header';

function App() {
  const navButtons = [
    'Solution', 'Features', 'Learn', 'Marketplace', 
    'Pricing', 'Customers', 'Partner', 'Log In'
  ];

  const sideButtons = [
    'See Demo', 'Get Started'
  ];

  return (
    <>
    <Header navButtons={navButtons} sideButtons={sideButtons} />
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/solution' element={<Solution />} />
        <Route path='/features' element={<Features />} />
        <Route path='/learn' element={<Learn />} />
        <Route path='/marketplace' element={<MarketPlace />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/partner' element={<Partners />} />
        <Route path='/login' element={<Login />} />
        <Route path='/SeeDemo' element={<SeeDemo />} />
        <Route path='/GetStarted' element={<GetStarted />} />
        <Route path='/ErrorPage' element={<ErrorPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
      
    
  );
}

export default App;

