import axios from "axios";
import React, {useEffect, useState} from 'react'
import {useParams } from "react-router-dom";
import Container from '../components/Container'

const ProductDetails = () => {
    let productId = useParams()
    let [singleProduct, setSingleProduct] = useState({})
    let singleData = () => {
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
            setSingleProduct(response.data);
        });
    };
    useEffect(() => {
        singleData();
    }, [productId]);    
    
  return (
    <div className="details">
        <Container>
            <div className="">
                <img src={singleProduct.thumbnail} alt={singleProduct.title} />
            </div>
        </Container>
    </div>
  )
}

export default ProductDetails