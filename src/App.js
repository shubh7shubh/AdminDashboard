import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Settings from './components/Settings'
import Orders from './components/Orders'
import Login from './components/Login'
import UserDetails from './components/UserDetails'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import App from './App.css'
const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/login' element={<Login />} /> */}
        <Route path='/settings' element={<Settings />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/:id' element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer
    autoClose={1000}
    pauseOnHover={false}
    position="bottom-right"
    toastStyle={{color:"white",backgroundColor:"#544fb2"}}
     />
  </>
}

export default App
