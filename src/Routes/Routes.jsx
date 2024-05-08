import {
    createBrowserRouter,
    
  } from "react-router-dom";

import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main/Main";
import Shop from "../Pages/Shop/Shop";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main> ,
      children: [
        {
            path : '/',
            element : <Home></Home>
        },
        {
            path : 'shop',
            element : <Shop></Shop>
        },
        {
            path : 'productCard',
            element : <Shop></Shop>
        }
       
      ]
    },
  ]);