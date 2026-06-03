import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Mainpage from './pages/mainpage.jsx'
import Gamepage from './pages/gamepage.jsx'
import Header from './components/header.jsx'
import { BrowserRouter, Route , Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route element={<Mainpage/>} path='/'/>
      <Route element={<Gamepage/>}path='/map/:mapid'/>
    </Routes>
    </BrowserRouter>
  </StrictMode>
)
