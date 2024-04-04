import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Prod from './Components/GetStarted/Prod';
import SingleProd from './Components/GetStarted/SingleProd';
import About from './Components/GetStarted/About';
import { lazy } from 'react';

import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Category from './Components/GetStarted/Category';


const LazyAbout = React.lazy(()=> import('./Components/GetStarted/About'))
const LazyCategory = React.lazy(()=> import('./Components/GetStarted/Category'))
const LazyProd = React.lazy(()=> import('./Components/GetStarted/Prod'))



function App() {
  return (
    <>
        <BrowserRouter>
        <Routes>
        <Route  path="/" element={<Main/>}/>
        <Route  path="/prod" element ={<React.Suspense fallback='...Loading'>
          <LazyProd/>
        </React.Suspense>}/>
        <Route  path="/about" element ={<React.Suspense fallback='...Loading'>
          <LazyAbout/>
        </React.Suspense>}/>
        <Route  path="/category" element ={<React.Suspense fallback='...Loading'>
          <LazyCategory/>
        </React.Suspense>}/>
        <Route exact path="/prod/:prodId" element={<SingleProd/>}/>
        
        </Routes>
        </BrowserRouter>
      
    </>
  )
}

export default App;
