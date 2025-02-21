import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { PHOTOURL } from '../utils/constant';
import { BACKGROUND_URL } from "../utils/constant";



const Login = () => {

    const dispatch = useDispatch();
    const [isSignInFrom, setIsSingInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    
    const email = useRef(null);
    const password = useRef(null);
    const full_Name = useRef(null);

    const handleButtonClick = (e) => {
        // Validate the form data 
 
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if(message) return;

        const emailValue = email.current.value;
        const passwordValue = password.current.value;
        const fullNameValue = full_Name.current?.value || "";

        email.current.value = "";
        password.current.value = "";
        if (full_Name.current) full_Name.current.value = "";
        

        // Sign In / Sign up Logic
        if (!isSignInFrom){
            // Sign up Logic

      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {

        updateProfile(auth.currentUser, {
            displayName: fullNameValue, 
            photoURL: PHOTOURL,
          }).then(() => {
        const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({
             uid : uid, 
             email : email, 
             displayName : displayName , 
             photoURL : photoURL}))
          }).catch((error) => {
            setErrorMessage(error)
          });
        })
        .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         setErrorMessage(errorCode + " - " + errorMessage);
  })
        }
        else {
            // sign in Logic
  
        signInWithEmailAndPassword(auth, emailValue, passwordValue)
          .then((userCredential) => {
            const user = userCredential.user;
                  })
          .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           setErrorMessage(errorCode + " - " + errorMessage);
              });
     
        }
    }

    const toggleSignInForm = () => {
           setIsSingInForm(!isSignInFrom);
    };
     
  return (
    <div  >
        <Header />
        <div >
            <img className='absolute w-screen h-screen'
             src={BACKGROUND_URL}
             alt='backgroundImg' />
         </div>
    
    <form onSubmit={((e) => e.preventDefault())} className='absolute  w-3/12 bg-black p-12 flex flex-col my-32 mx-auto right-0 left-0 rounded-lg text-white bg-opacity-80'>
         
        <h1 className=' font-bold text-3xl mb-6 '>
            {isSignInFrom? "Sign In" : "Sign Up"}
        </h1>
        
        {
            !isSignInFrom && 
            <input 
            ref={full_Name}
            type='text' 
            placeholder='Full Name' 
            className='p-3 my-3 rounded-sm bg-gray-600' />
        
        }

        <input 
            ref={email}
            type='text' 
            placeholder='Email or mobile number' 
            className='p-3 my-3 rounded-sm bg-gray-600' />
        
        <input 
            ref={password}
            type='password' 
            placeholder='Password' 
            className='p-3 my-3 rounded-sm bg-gray-600' />

            <p className=' py-2 font-bold text-red-600'>{errorMessage}</p>

        <button onClick={((e) => handleButtonClick(e))}
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
