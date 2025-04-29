import React from 'react'
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';

const Register = () => {
  const auth = getAuth();
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [smessage, setSMessage] = useState('')

  let handleEmail = (e)=>{
    setEmail(e.target.value)
  }
  let handlePassword = (e)=>{
    setPassword(e.target.value)
  }
  let handleSubmit = ()=>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setSMessage('Successfuly create account.')
      
    })
    .catch((error) => {
      setSMessage('Cannot create account.')
      
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 py-[48px]">
      <div className="">
        <p className='py-[20px]'>{smessage}</p>
      </div>
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md" >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
          <input onChange={handleEmail} type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
          <input onChange={handlePassword} type="password" id="password" name="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        </div>
        <button onClick={handleSubmit} type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">Register</button>
        <div className="login flex items-center py-[20px] gap-3">
          <p>Have account?</p>
          <Link to='/login' className="inline-block bg-blue-500 text-white py-2 px-[40px] rounded-lg hover:bg-blue-600 transition-colors">Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Register