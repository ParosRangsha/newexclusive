import React, { useState } from 'react'
import Header from './Header'
import { data, Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  let [viewproject, setviewproject] = useState(false)
  let dataInp = (res)=>{
    if(res.target.value == 998){
      setviewproject(false)
    }
  }
  return (
    <>
    {
      viewproject ? 
      <div className="w-[100%] h-[100vh] bg-[#555] flex justify-center items-center">
        <div className="h-[150px] bg-[#999] px-[50px] flex justify-center items-center">
          <input type="text" onChange={(e)=>dataInp(e)} placeholder='Please Enter Password' className='py-[15px] px-[30px]'/>
        </div>
      </div>
      :
      <>
        <Header/>
        <Outlet/>
        <Footer/>
      </>
    }
    </>
  )
}

export default Layout