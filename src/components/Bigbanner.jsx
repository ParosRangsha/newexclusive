import React, {useContext} from 'react'
import Container from './Container'
import Timer from './Timer'
import { Apidata } from '../Mydata/ProductApi'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

const Bigbanner = () => {
    let info = useContext(Apidata)
    var bigbannerSlider = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <div className="py-[48px]">
        <Container>
            <Slider>
                {info.slice(15, 40).map((item, i)=>(
                    <div className=''>
                        <div className="banner flex bg-[#000] text-[#fff]" key={i}>
                            <div className="txt w-1/2 p-[48px]">
                                <p>{item.category.toUpperCase()}</p>
                                <div className="h-[150px]">
                                    <p>{item.title.toUpperCase()}</p>
                                </div>
                                <Timer duration={3 * 24 * 60 * 60 * 1000} />

                            </div>
                            <div className="thumb w-1/2 p-[48px]">
                                <img src={item.thumbnail} alt={item.title}/>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </Container>
    </div>
  )
}

export default Bigbanner