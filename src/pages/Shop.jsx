import React, {useContext, useState, useEffect} from 'react'
import Banner from '../components/Banner'
import Container from '../components/Container'
import { Apidata } from '../Mydata/ProductApi'
import Post from './Post'

const Shop = () => {
  let info = useContext(Apidata)
  let [Category, setCategory] = useState([])
  let [Brand, setBrand] = useState([])
  useEffect(()=>{
    setCategory([...new Set(info.map((item) => item.category))]);
    setBrand([...new Set(info.map((item) => item.brand))]);
  },[info])


  return (
    <div className="shop py-[48px]">
      <Container>
        <div className="">
          <h1 className="text-[36px] font-semibold">Shop</h1>
        </div>
        <div className="contains flex gap-2">
          <div className="sidemenu w-[20%]">
            <div className="list">
              <h3 className="font-bold bg-[#db4444] pl-[5px]">Choose Category</h3>
              <ul className="mb-[30px] h-[300px] overflow-y-scroll">
                {
                  Category.map((item, i)=>(
                    <li key={i}  className='py-[5px] flex justify-between items-center hover:bg-[#db4444] hover:text-[#fff] duration-[1s] hover:px-[15px] cursor-pointer border-b-[1px] border-[#ddd]'>{item}</li>
                  ))
                }
              </ul>
              <h3 className="font-bold bg-[#db4444] pl-[5px]">Choose Brand</h3>
              <ul className="mb-[30px] h-[300px] overflow-y-scroll">
                {
                  Brand.map((item, i)=>(
                    <li key={i}  className='py-[5px] flex justify-between items-center hover:bg-[#db4444] hover:text-[#fff] duration-[1s] hover:px-[15px] cursor-pointer border-b-[1px] border-[#ddd]'>{item}</li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className="productsfield w-[80%] pl-[20px]">
            <Post/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Shop