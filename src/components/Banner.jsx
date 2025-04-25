import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import { Apidata } from '../Mydata/ProductApi'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


const Banner = () => {
    let info = useContext(Apidata)
    let [category, setCategory] = useState([])
    useEffect(()=>{
        setCategory([...new Set(info.map((item) => item.category))]);
    },[info])
    var banslider = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    
  return (
    <div className="banner">
        <Container>
            <div className="flex">
                <div className="sidemenu py-[40px] pr-2 w-[15%] border-r-[1px]">
                    <h1 className='font-bold text-[18px]'>Shop by Category</h1>
                    <ul className='flex flex-col py-[20px] h-[500px] overflow-y-scroll'>
                        {
                            category.map((item, i)=>(
                                <li key={i} className='py-[5px] flex justify-between items-center hover:bg-[#db4444] hover:text-[#fff] duration-[1s] hover:px-[15px] cursor-pointer'>{item.slice(0,10).toUpperCase()}<IoIosArrowForward/></li>
                            ))
                        }
                    </ul>
                </div>
                <div className="ban w-[85%] pt-[40px] pl-[40px] pb-[40px]">
                    <Slider {...banslider}>
                    {
                        info.map((item, i)=>(
                                <div className="">
                                    <div className="slideitem w-full bg-[#000] text-[#fff] flex">
                                        <div className="sidetext w-1/2 p-[58px]">
                                            <div className="title flex gap-3 items-center">
                                                <img src={item.thumbnail} alt="" className='h-[50px]'/>
                                                <h1 className='text-[20px]'>{item.title}</h1>
                                            </div>
                                            <h1 className='text-[48px] font-semibold'>Up to {Math.floor(item.discountPercentage)}% off Voucher</h1>
                                            <div className="flex items-center gap-3 py-[10px]">
                                                <Link to='/shop' className='inline-block items-center gap-3 relative after:absolute after:contents-[""] after:h-[3px] after:w-full after:bg-[#fff] after:top-full after:left-0 bg-[#333] hover:bg-[#555] py-[10px] px-[15px] duration-[1s]'>Shop Now </Link> 
                                            </div>
                                            <p className='text-justify h-[100px]'>{item.description}</p>
                                        </div>
                                        <div className="thumb w-1/2 p-[48px]">
                                            <img src={item.thumbnail} alt="" className="w-full"/>
                                        </div>
                                    </div>
                                </div>
                        ))
                    }
                    </Slider>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Banner