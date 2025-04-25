import React, { useState } from 'react'
import Container from './Container'
import { LuSendHorizontal } from "react-icons/lu";
import { Link } from 'react-router-dom';
import qrcode from '../assets/qrcode.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaRegCopyright} from "react-icons/fa";



const Footer = () => {
  let [myMenu, setMyMenu] = useState(['Login', 'Register', 'Shop', 'Cart', 'Wishlist'])
  return (
    <>
      <div className="footer bg-[#000] text-[#fff] py-[80px]">
        <Container>
          <h1 className='font-bold text-[24px] py-[10px]'>Exclusive</h1>
          <div className="listitems w-full flex gap-2">
            <div className="items w-1/5 flex flex-col">
              <h1 className='font-medium text-[20px] pb-[10px]'>Subscribe</h1>
              <p>Get 10% off your first order</p>
              <div className="sendbox relative">
                <input type="text" placeholder='Enter your email' className='py-[12px] px-[16px] border-[1px] border-[#fff] bg-transparent rounded-[5px] outline-none'/>
                <LuSendHorizontal className='absolute right-[16px] top-[50%] translate-y-[-50%]'/>
              </div>
            </div>
            <div className="items w-1/5">
              <h1 className='font-medium text-[20px] pb-[10px]'>Support</h1>
              <div className="contact flex flex-col gap-1">
                <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
              </div>
              
            </div>
            <div className="items w-1/5">
              <h1 className='font-medium text-[20px] pb-[10px]'>Account</h1>
              <ul>
                {
                  myMenu.map((item, i)=>(
                    <li key={i}>
                      <Link to={`/${item}`}>{item}</Link>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="items w-1/5">
              <h1 className='font-medium text-[20px] pb-[10px]'>Quick Link</h1>
              <div className="link">
                <Link to='privacypolicy' className='block'>Privacy Policy</Link>
                <Link to='termsofuse' className='block'>Terms Of Use</Link>
                <Link to='faq' className='block'>FAQ</Link>
                <Link to='contact' className='block'>Contact</Link>
              </div>
            </div>
            <div className="items w-1/5">
              <h1 className='font-medium text-[20px] pb-[10px]'>Download App</h1>
              <p>Save $3 with App New User Only</p>
              <img src={qrcode} alt="qrcode" />
              <div className="sociallink flex gap-3 pt-2">
                <Link to='https://facebook.com/paroscrangsha'><FaFacebookF/></Link>
                <Link to='https://x.com/paroscrangsha'><FaTwitter/></Link>
                <Link to='https://instagram.com/paroscrangsha'><FaInstagram/></Link>
                <Link to='https://linkedin.com/in/paroscrangsha'><FaLinkedin/></Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <h1 className='w-full flex items-center justify-center bg-[#000] text-[#fff] py-[10px]'> <FaRegCopyright/>Copyright Rimel 2022. All right reserved</h1>
    </>
  )
}

export default Footer