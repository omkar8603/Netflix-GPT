import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)
  const handdleSignOut = () => {

    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser());
      navigator("/")
      
    }).catch((error) => {
      // An error happened.
      console.log(error);
      navigator("/error")
    });

  }


  return (
    <div className="absolute px-16 py-2 w-screen  bg-gradient-to-b from-black z-10 flex justify-between" >
      <img className='w-44'
      src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
      alt='Logo' />
      {
        user && 
        <div className='flex items-center'>
        <img className="w-12 h-12 p-2 m-2 rounded-lg"
        src={user?.photoURL}
             alt='User Icon' />
             <button onClick={handdleSignOut}>Sign Out</button>
         </div>
      }
    </div>
  )
}

export default Header




// ht tps://i.pinimg.com/736x/92/b4/e7/92b4e7c57de1b5e1e8c5e883fd915450.jpg