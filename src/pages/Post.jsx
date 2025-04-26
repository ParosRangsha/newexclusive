import React, {useContext, useState, useEffect} from 'react'
import Banner from '../components/Banner'
import Container from '../components/Container'
import { Apidata } from '../Mydata/ProductApi'

const Post = () => {
    let info = useContext(Apidata)
    let [ShowFilter, setShowFilter] = useState([])
  return (
    <div>
        <div className="heading w-full bg-[#db4444] py-[10px]">
            a
        </div>
        <div className="products">
            {
                ShowFilter.length > 0 ? 
                <div>

                </div>
                :
                <div className="">
                {
                    info.map((item, i)=>(
                    <p key={i}>{item.title}</p>
                    ))
                }
                </div>
            }
        </div>
    </div>
  )
}

export default Post