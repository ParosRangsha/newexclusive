import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    let data = useSelector((state)=>state.product.cartItem)
    console.log(data);
    
  return (
    <div>Cart</div>
  )
}

export default Cart