import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from './navbar/Nav'
import Home from './home/Home'
import Page1 from './page1/Page1'
import Page2 from './page2/Page2'
import Menu from './menu/Menu'
import { useState } from 'react'

function App() {
  const [open, setOpen]=useState(false)
  return (
    <div className='app'>
      <BrowserRouter>
      <Nav setOpen={setOpen} open={open}/>
      <Menu open={open}/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/page1' element={<Page1/>}/>
          <Route path='/page2' element={<Page2/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
