import React, {useEffect} from 'react'
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useDispatch, useSelector } from 'react-redux';
import { removeUser, addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { LOGO } from "../utils/constant"
import { toggleGptSearchView } from "../utils/gptSlice"
import { SUPPORTED_LANGUAGE } from '../utils/constant';
import { changeLanguage } from '../utils/configslice';

const Header = () => {
  
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user)
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);



 const handleGPTSeachClick = () => {
   // Toggle the Gpt Search
   dispatch(toggleGptSearchView());
  
 }

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
  
  
      const handleLanguageChange = (e) => {
             dispatch(changeLanguage(e.target.value))
       }
  return (
    <div className="absolute px-16 py-2 w-screen  bg-gradient-to-b from-black z-20  flex flex-col  md:flex-row justify-between" >
      <img className='w-44 mx-auto md:mx-0'
      src={LOGO}
      alt='Logo' />
      {
        user && 
        <div className='flex items-center justify-between'>
         
         {
          showGptSearch    && 
                <select 
                       className='p-2 m-2 bg-slate-900 text-white'
                       onChange={handleLanguageChange}>
                   {
                   SUPPORTED_LANGUAGE?.map((ln) => ( <option key={ln.identifier} value={ln?.identifier}>{ln?.name}</option> ))
                    }       
                </select>
         }

          <button className='p-2 m-2 bg-orange-700 text-white rounded-lg font-bold'
          onClick={handleGPTSeachClick}>{showGptSearch ? "HomePage" : "GPT Search"}</button>

        <img className="hidden md:block w-12 h-12 p-2 m-2 rounded-lg"
        src={user?.photoURL}
             alt='User Icon' />
             <button className='font-bold text-white p-2 rounded-lg bg-red-600' onClick={handdleSignOut}>Sign Out</button>
         </div>
      }
    </div>
  )
}

export default Header




// https://i.pinimg.com/736x/92/b4/e7/92b4e7c57de1b5e1e8c5e883fd915450.jpg