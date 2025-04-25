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
            <div className="flex">
                <div className="photos w-[15%]">
                    <div className="item w-[50px]">
                        {
                            
                        }
                    </div>
                </div>
                <div className="bigthumb w-[45%]">2</div>
                <div className="txt w-[40%]">3</div>
            </div>
        </Container>
    </div>
  )
}

export default ProductDetails