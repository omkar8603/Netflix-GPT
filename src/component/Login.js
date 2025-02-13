import React, { useState } from 'react'
import Header from './Header'
import bgImg from '../assets/bgImg.jpg'

const Login = () => {

    const [isSignInFrom, setIsSingInForm] = useState(true);

    const toggleSignInForm = () => {
           setIsSingInForm(!isSignInFrom);
    };
     
  return (
    <div >
        <Header />
        <div >
            <img className='absolute'
             src={bgImg}
             alt='backgroundImg' />
         </div>
    
    <form className='absolute  w-3/12 bg-black p-12 flex flex-col my-32 mx-auto right-0 left-0 rounded-lg text-white bg-opacity-80'>
         
        <h1 className=' font-bold text-3xl mb-6 '>
            {isSignInFrom? "Sign In" : "Sign Up"}
        </h1>
        
        {
            isSignInFrom && 
            <input 
            type='text' 
            placeholder='Full Name' 
            className='p-3 my-3 rounded-sm bg-gray-600' />
        
        }
        <input 
            type='text' 
            placeholder='Email or mobile number' 
            className='p-3 my-3 rounded-sm bg-gray-600' />
        <input 
            type='password' 
            placeholder='Password' 
            className='p-3 my-3 rounded-sm bg-gray-600' />

        <button 
           className='my-3 p-2 text-white bg-red-600 hover:bg-rose-700 rounded-sm'>
           {isSignInFrom ? "Sing In" : "Sign Up"}</button>

        <p className='py-4 cursor-pointer' 
        onClick={toggleSignInForm}
        > {isSignInFrom ? "New to Netflix? Sign up now" : "Already Registered ? Sign in now"}</p>

    </form>
    </div>
  )
}

export default Login
