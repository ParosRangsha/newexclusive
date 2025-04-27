import React, { useContext, useState } from 'react'
import Container from './Container'
import { FaSearch, FaRegHeart  } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { Apidata } from '../Mydata/ProductApi';


const Header = () => {
    let info = useContext(Apidata)
    let [myMenu, setMyMenu] = useState(['Home', 'Shop', 'Contact', 'About', 'Register'])
    let [searchVal, setSearchVal] = useState('')
    let [searchShow, setSearchShow] = useState([])

    let handleSearch = (e) => {
        setSearchVal(e.target.value);
        if(e.target.value == ""){
            setSearchShow([])
        }else{
          let searchOne = info.filter((item)=>item.title.toLowerCase().includes(e.target.value.toLowerCase()))
          setSearchShow(searchOne);
        }
    };
    console.log(searchShow)
  return (
    <div className="header sticky top-0 w-full left-0 bg-[#fff] z-[999]">
        <div className="noticeboard w-full bg-[#000] text-[#fff] py-[15px] flex items-center">
            <div className="txt w-[90%] flex gap-3 justify-center">
                <h1>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h1>
                <Link className='font-bold' to='/shop'>Shop Now</Link>
            </div>
            <div className="lang">
                <select name="language" id="laguage" className='bg-[#000] border-[1px] border-[#fff] rounded-[3px]'>
                    <option value="English">English</option>
                    <option value="Bangla">Bangla</option>
                </select>
            </div>
        </div>
        <Container>
            <div className="flex items-center justify-between py-[10px]">
                <div className="logo">
                    <h1 className='font-bold text-[24px]'>Exclusive</h1>
                </div>
                <div className="menus">
                    <ul className='flex justify-between'>
                        {
                            myMenu.map((item, i)=>(
                                <li key={i}>
                                  <Link to={`/${item}`}  className='px-[15px] py-[10px] cursor-pointer hover:bg-[#f5f5f5] duration-[1s] relative after:absolute after:contents-[""] after:h-[5px] after:w-0 after:bg-[#f00] after:left-0 after:bottom-0 after:opacity-0 hover:after:opacity-[100%] after:duration-[1s] hover:after:w-full'>{item}</Link>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="icons flex items-center gap-3">
                    <div className="search relative">
                        <input onChange={handleSearch} type="text" placeholder='What are you looking for?' className='p-[10px] bg-[#f5f5f5] rounded-[5px]'/>
                        <FaSearch className='absolute right-[10px] top-[50%] translate-y-[-50%]'/>
                        <div className={`${searchShow.length > 0 ? 'block': 'hidden'} popup w-full absolute top-[100%] left-0 bg-[#db4444] overflow-y-scroll h-[350px] `}>
                            <ul>
                                {
                                    searchShow.map((item, i)=>(
                                        <li key={i}>
                                            <Link to={`/shop/${item.id}`} className='flex items-center my-[5px] px-[5px] hover:bg-[#ddd]'>
                                                <img src={item.thumbnail} alt={item.title} className='h-[30px] w-[30px]'/>
                                                <p>{item.title.slice(0,20)}</p>
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <FaRegHeart />
                    <IoCartOutline/>
                </div>
            </div>
        </Container>
        <hr />
    </div>
  )
}

export default Header