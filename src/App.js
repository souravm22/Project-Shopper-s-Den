import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Prod from './Components/GetStarted/Prod';
import SingleProd from './Components/GetStarted/SingleProd';
import About from './Components/GetStarted/About';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Category from './Components/GetStarted/Category';
function App() {
  return (
    <>
        <BrowserRouter>
        <Routes>
        <Route  path="/" element={<Main/>}/>
        <Route  path="/prod" element={<Prod/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/category" element={<Category/>}/>
        <Route exact path="/prod/:prodId" element={<SingleProd/>}/>
        
        </Routes>
        </BrowserRouter>
      
    </>
  )
}

export default App;
