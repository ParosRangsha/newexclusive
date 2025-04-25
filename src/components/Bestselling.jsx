import React, { useContext} from 'react'
import Container from './Container'
import Headsub from './Headsub'
import {Link} from 'react-router-dom'
import { Apidata } from '../Mydata/ProductApi'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FaRegHeart } from "react-icons/fa";
import { BiShow } from "react-icons/bi";

const Bestselling = () => {
  let info = useContext(Apidata)
  var BestsellingSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="">
      <Container>
        <div className="py-[48px]">
          <Headsub cap='This Month'/>
          <div className="flex justify-between items-center">
            <h1 className='font-semibold text-[36px]'>Best Selling Products</h1>
            <Link to="/shop" className="inline-block py-[10px] px-[20px] bg-[#db4444] text-[#fff] rounded-[5px]">View All</Link>
          </div>
          <div className="products">
            <Slider {...BestsellingSlider}>
                {
                  info.slice(20, 50).map((item, i)=>(
                    <div className="p-[10px]">
                      <div className="items w-full" key={i}>
                        <div className="thumb p-[12px] relative bg-[#ddd] group">
                          <img src={item.thumbnail} alt="" />
                          <div className="offer absolute top-[12px] left-[12px] py-[4px] px-[12px] bg-[#DB4444] text-[#fff] rounded-[5px]">
                            <p>-{Math.floor(item.discountPercentage)}%</p>
                          </div>
                          <div className="btns absolute top-[12px] right-[12px] flex flex-col gap-3 text-[22px]">
                            <FaRegHeart/>
                            <Link to={`/shop/${item.id}`}><BiShow/></Link>
                          </div>
                          <div className="addtocart absolute bottom-0 left-0 w-full scale-0 group-hover:scale-[100%] duration-[1s] bg-[#000] text-[#fff] py-[10px]">
                            <p className='text-center'>Add To Cart</p>
                          </div>
                        </div>
                        <div className="txt py-[5px]">
                          <p className='font-bold text-[18px]'>{item.title.slice(0,30)}</p>
                          <p>Price: ${item.price}</p>
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

export default Bestselling