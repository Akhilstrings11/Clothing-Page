import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './Components/NavBar';
import MenPage from './Components/MenPage';
import BoyPage from './Components/BoyPage';
import AboutPage from './Components/AboutPage';
import ContactPage from './Components/ContactPage';
import ShirtsPage from './Components/Pages/ShirtsPage';
import JeansPage from './Components/Pages/JeansPage';
import TshirtsPage from './Components/Pages/TshirtsPage';
import ShortsPage from './Components/Pages/ShortsPage';
import JacketsPage from './Components/Pages/JacketsPage';
import TrousersPage from './Components/Pages/TrousersPage';

function App() {
  return (
    <div>
     <BrowserRouter>
      <NavBar />
      <Routes>

        <Route path='/' element = { <HomePage /> } />
        <Route path='/men' element = { <MenPage /> } />
        <Route path='/boy' element = { <BoyPage /> } />
        <Route path='/about' element = { <AboutPage /> } />
        <Route path='/contact' element = { <ContactPage /> } />
        <Route path='/shirts' element = { <ShirtsPage /> } />
        <Route path='/jeans' element = { <JeansPage /> } />
        <Route path='/tshirts' element = { <TshirtsPage /> } />
        <Route path='/shorts' element = { <ShortsPage /> } />
        <Route path='/jackets' element = { <JacketsPage /> } />
        <Route path='/trousers' element = { <TrousersPage /> } />

      </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
