import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider, } from 'react-router-dom'
import GptSearch from './GptSearch'
import ErrorPage from './Error'


const Body = () => {

   

  const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
        errorElement : <ErrorPage/>
    },
    {
        path: "/browse",
        element: <Browse />,
        errorElement : <ErrorPage/>
    },
    {
      path : "/gpt",
      element : <GptSearch />,
      errorElement : <ErrorPage/>

    }
]);


 
  return (
    <div>
   <RouterProvider router={appRouter}/> 
    </div>
  )
}

export default Body
