import React, { useState } from 'react'
import Container from '../components/Container'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const auth = getAuth();
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let navigate = useNavigate('')

    let [loginmessage, setLoginMessage] = useState('')

    let handleMail = (e)=>{
        setEmail(e.target.value)
    }
    let handlePass = (e)=>{
        setPassword(e.target.value)
    }
    let handleSubmit = ()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setLoginMessage('You are successfuly Login')
            navigate('/home')
            
        })
        .catch((error) => {
            setLoginMessage('Your email or password are wrong! try again')
            
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    }
  return (
    <div className="login">
        <Container>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <p className='text-[#d00] py-[30px]'>{loginmessage}</p>
                <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-2xl shadow-lg">
                    <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

                    <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-600">Email</label>
                        <input onChange={handleMail}  id="email" type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-600">Password</label>
                        <input onChange={handlePass} id="password" type="password" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    </div>
                    <button onClick={handleSubmit} type="submit" className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">Login</button>
                    </div>
                </div>
                <div className="register flex items-center py-[20px] gap-3">
                    <p>Need account?</p>
                    <Link to='/register' className="inline-block bg-blue-500 text-white py-2 px-[40px] rounded-lg hover:bg-blue-600 transition-colors">Register</Link>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Login