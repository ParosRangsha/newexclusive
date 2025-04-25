import React, { useContext, useEffect, useState } from 'react'
import Container from './Container'
import Headsub from './Headsub'
import { Apidata } from '../Mydata/ProductApi'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Categories = () => {
    let info = useContext(Apidata)
    let [category, setCategory] = useState([])
    useEffect(()=>{
        setCategory([...new Set(info.map((item) => item.category))]);
    },[info])
        
    var cateSlider = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
  return (
    <div className="categories">
        <Container>
            <div className="py-[48px]">
                <Headsub cap='Categories'/>
                <h1 className='font-semibold text-[36px]'>Browse By Category</h1>
                <div className="items">
                    <Slider {...cateSlider}>
                        {
                            category.map((item, i)=>(
                                <div className='px-[10px]'>
                                    <p className='font-bold text-[28px] py-[48px] rounded-[10px] text-center bg-[#fff] border-[1px] border-[#db4444] hover:bg-[#db4444] text-[#db4444] hover:text-[#fff] duration-[1s] cursor-pointer'>{item.slice(0,15).toUpperCase()}</p>
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

export default Categories