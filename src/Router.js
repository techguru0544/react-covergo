import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home'
import Form from './components/pages/Form'
import Premium from './components/pages/Premium'
function Router() {
  return (
    <Routes>        
        <Route path='/' element={<Home/>}/>
        <Route path='/tell-us-about-yourself' element={<Form/>}/>
        <Route path='/premium' element={<Premium/>}/>
    </Routes>
  )
}

export default Router