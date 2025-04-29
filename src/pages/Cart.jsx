import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Container from '../components/Container';
import { RiDeleteBin5Line } from "react-icons/ri";


const Cart = () => {
    let data = useSelector((state)=>state.product.cartItem)
    let [ulhead, setUlhead] = useState(['Serial', 'Thumbnail', 'Title', 'Price', 'Quantity', 'Action'])
    
  return (
    <div className="cart">
      <Container>
        <div className="contains">
          <ul className="flex w-full py-[10px] bg-[#db4444]">
            {ulhead.map((item, i) => (
              <li
                key={i}
                className={`w-1/${ulhead.length} flex justify-center`}
              >
                {item}
              </li>
            ))}
          </ul>
          <ul className="w-full h-[250px] overflow-y-scroll">
            {data.map((item, i) => (
              <li key={i} className="w-full flex items-center">
                <div className={`w-1/${ulhead.length} flex justify-center`}>
                  {i + 1}
                </div>
                <div className={`w-1/${ulhead.length} flex justify-center`}>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-[50px] w-[50px]"
                  />
                </div>
                <div className={`w-1/${ulhead.length} flex`}>
                  {item.title}
                </div>
                <div className={`w-1/${ulhead.length} flex justify-center`}>
                  ${item.price}
                </div>
                <div className={`w-1/${ulhead.length} flex justify-center`}>
                  {item.qty}
                </div>
                <div className={`w-1/${ulhead.length} flex justify-center`}>
                  <RiDeleteBin5Line/>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Cart