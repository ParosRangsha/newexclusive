import axios from "axios";
import React, {useEffect, useState} from 'react'
import {useNavigate, useParams } from "react-router-dom";
import Container from '../components/Container'
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToCart } from "../components/slice/productSlice";

const ProductDetails = () => {
    let productId = useParams()
    let [singleProduct, setSingleProduct] = useState({})
    let singleData = () => {
        axios.get(`https://dummyjson.com/products/${productId.id}`).then((response) => {
            setSingleProduct(response.data);
        });
    };
    let clientRating = Array.from({ length: 5 }, (_, index) => {
        let number = index + 0.5;
        return singleProduct.rating > index + 1 ? (
          <IoMdStar key={index}/>
        ) : singleProduct.rating > number ? (
          <IoMdStarHalf  key={index}/>
        ) : (
          <IoMdStarOutline  key={index}/>
        );
    });
    let myPrice = ((singleProduct.price / 100) * singleProduct.discountPercentage ) + singleProduct.price
    let [myPhotos, setmyPhotos] = useState([])
    let [review, setReview] = useState([])

    useEffect(() => {
        singleData();
        fetch(`https://dummyjson.com/products/${productId.id}`).then(response => response.json()).then(data => setmyPhotos(data.images)).catch(error => console.error('Error:', error));
        fetch(`https://dummyjson.com/products/${productId.id}`).then(response => response.json()).then(data => setReview(data.reviews)).catch(error => console.error('Error:', error));
    }, [productId]);   

    let dispatch = useDispatch()
    let navigate = useNavigate();
    let handleCart = (item) => {
        dispatch(addToCart({...item, qty: 1}))
        toast("Item successfuly added!");
        setTimeout(() => {
        navigate("/cart");
        }, 1500);
        

    };
         
  return (
    <div className="details py-[48px]">
      <Container>
        <div className="flex bg-white overflow-hidden">
          <div className="w-1/2 flex">
            <div className="w-[15%]">
              {myPhotos.map((item, i) => (
                <div
                  className="w-[100px] h-[100px] border-[1px] border-[#db4444] mb-2"
                  key={i}
                >
                  <img
                    src={item}
                    alt="product thumb"
                    className="w-full h-full"
                  />
                </div>
              ))}
            </div>
            <div className="thumb w-[85%] flex justify-center items-center">
              <img
                src={singleProduct.thumbnail}
                alt="Product"
                className="h-full"
              />
            </div>
          </div>
          <div className="w-1/2 p-6 flex flex-col justify-between">
            <h1 className="text-[28px] font-bold text-gray-800 mb-4">
              {singleProduct.title}
            </h1>
            <div className="rating flex items-center gap-3">
              <p>Rating: </p>
              <p className="flex items-center gap-1 text-[#db4444]">
                {clientRating}
              </p>
              <p>(Review: {review.length})</p>
            </div>
            <p className="text-gray-600 mb-4">{singleProduct.description}</p>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[24px] font-semibold text-green-600">
                ${singleProduct.price}
              </span>
              <span className="text-[18px] text-gray-500 line-through">
                ${myPrice.toFixed(2)}
              </span>
            </div>
            <div className="flex items-center mb-6">
              <label
                htmlFor="quantity"
                className="font-medium text-gray-700 mr-4"
              >
                Quantity:
              </label>
              <input
                id="quantity"
                type="number"
                min="1"
                defaultValue="1"
                className="w-20 px-3 py-2 border border-gray-300 rounded-[5px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <ToastContainer />
            <div onClick={() => handleCart(singleProduct)} className="flex justify-start">
              <button className="bg-[#55d] text-white py-2 px-6 rounded-md hover:bg-[#339] transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ProductDetails