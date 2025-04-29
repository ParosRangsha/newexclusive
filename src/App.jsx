import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
import Errorpage from './pages/Errorpage'
import ProductDetails from './pages/ProductDetails'
import Contact from './pages/Contact'
import About from './pages/About'
import Register from './pages/Register'
import Shop from './pages/Shop'
import Login from './pages/Login'

function App({cap}) {
  let multipage = createBrowserRouter(createRoutesFromElements(
    <>
      <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/shop/:id' element={<ProductDetails/>}/>
      </Route>
      <Route path='*' element={<Errorpage/>}/>
      
    </>
  ))
  return (
    <RouterProvider router={multipage}/>
  )
}

export default App
