import React from 'react'
import { Link } from 'react-router-dom'

const Errorpage = () => {
  return (
    <div className='h-[100vh] w-full flex flex-col justify-center items-center font-bold text-[50px]'>
        <h1>This site is not avaiable right now!</h1>
        <Link to='https://wa.me/+8801705620421' className='text-[20px]'>@Contact me!</Link>
    </div>
  )
}

export default Errorpage