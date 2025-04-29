import React, {useContext, useState, useEffect} from 'react'
import { Apidata } from '../Mydata/ProductApi'
import { FaRegHeart } from "react-icons/fa";
import { BiShow } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";


const Post = ({showData, allapge}) => {
    let info = useContext(Apidata)
  return (
    <div>
      <div className="heading w-full bg-[#db4444] py-[10px]">a</div>
      <div className="products">
        {showData.length > 0 ? (
          <div className="flex flex-wrap">
            {showData.map((item, i) => (
              <div className="items w-1/4 px-[5px] py-[20px]">
                <div className="thumb p-[12px] relative bg-[#ddd] group">
                  <Link to={`/shop/${item.id}`}>
                    <img src={item.thumbnail} alt="" />
                  </Link>
                  <div className="offer absolute top-[12px] left-[12px] py-[4px] px-[12px] bg-[#DB4444] text-[#fff] rounded-[5px]">
                    <p>-{Math.floor(item.discountPercentage)}%</p>
                  </div>
                  <div className="btns absolute top-[12px] right-[12px] flex flex-col gap-3 text-[22px]">
                    <FaRegHeart />
                    <Link to={`/shop/${item.id}`}>
                      <BiShow />
                    </Link>
                  </div>
                  <ToastContainer />
                </div>
                <div className="txt py-[5px]">
                  <p className="font-bold text-[18px]">
                    {item.title.slice(0, 20)}
                  </p>
                  <p>Price: ${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap">
            {allapge.map((item, i) => (
              <div className="items w-1/4 px-[5px] py-[20px]" key={i}>
                <div className="thumb p-[12px] relative bg-[#ddd] group">
                  <Link to={`/shop/${item.id}`}>
                    <img src={item.thumbnail} alt="" />
                  </Link>
                  <div className="offer absolute top-[12px] left-[12px] py-[4px] px-[12px] bg-[#DB4444] text-[#fff] rounded-[5px]">
                    <p>-{Math.floor(item.discountPercentage)}%</p>
                  </div>
                  <div className="btns absolute top-[12px] right-[12px] flex flex-col gap-3 text-[22px]">
                    <FaRegHeart />
                    <Link to={`/shop/${item.id}`}>
                      <BiShow />
                    </Link>
                  </div>
                  <ToastContainer />
                </div>
                <div className="txt py-[5px]">
                  <p className="font-bold text-[18px]">
                    {item.title.slice(0, 20)}
                  </p>
                  <p>Price: ${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Post