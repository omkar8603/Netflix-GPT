import React, {useEffect} from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useDispatch, useSelector } from 'react-redux';
import { removeUser, addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from "../utils/constant"


const Header = () => {
  
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)

  const handdleSignOut = () => {

    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(removeUser());    
    }).catch((error) => {
      // An error happened. 
    });

  }


     useEffect(() => {
      
     const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const {uid, email, displayName, photoURL} = user;
            dispatch(addUser({
              uid : uid, 
              email : email, 
              displayName : displayName , 
              photoURL : photoURL}));
              navigator("/browse");
          } else {
            dispatch(removeUser())  
            navigator("/")
          }
        });
          
        // unsubscribe when component unmount
        return () => unsubscribe();
      }, [])
  
  

  return (
    <div className="absolute px-16 py-2 w-screen  bg-gradient-to-b from-black z-10 flex justify-between" >
      <img className='w-44'
      src={LOGO}
      alt='Logo' />
      {
        user && 
        <div className='flex items-center'>
        <img className="w-12 h-12 p-2 m-2 rounded-lg"
        src={user?.photoURL}
             alt='User Icon' />
             <button className='font-bold text-white' onClick={handdleSignOut}>Sign Out</button>
         </div>
      }
    </div>
  )
}

export default Header




// https://i.pinimg.com/736x/92/b4/e7/92b4e7c57de1b5e1e8c5e883fd915450.jpg