import React from 'react'

const Headsub = ({cap}) => {
  return (
    <div className="headsub flex items-center my-[10px]">
        <div className="w-[20px] h-[40px] bg-[#DB4444]"></div>
        <h1 className='py-[10px] px-[16px]'>{cap}</h1>
    </div>
  )
}

export default Headsub