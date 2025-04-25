import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import Headsub from './Headsub'
import { Apidata } from '../Mydata/ProductApi'

const Categories = () => {
    let info = useContext(Apidata)
    let [category, setCategory] = useState([])
    useEffect(()=>{
        setCategory([...new Set(info.map((item) => item.category))]);
    })
  return (
    <div className="categories">
        <Container>
            <div className="py-[48px]">
                <Headsub cap='Categories'/>
                <h1 className='font-semibold text-[36px]'>Browse By Category</h1>
                <div className="items flex gap-3">
                    {
                        category.map((item, i)=>(
                            <div className={`w-1/${category.length} bg-[#db4444] flex justify-center items-center py-[48px]`}>
                                <p className='font-bold text-[28px] text-[#ffd]'>{item.toUpperCase()}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Categories