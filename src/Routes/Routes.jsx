import {
    createBrowserRouter,
    
  } from "react-router-dom";

import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main/Main";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";

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
        },
        {
            path : 'login',
            element : <Login></Login>
        },
        {
            path : 'signup',
            element : <SignUp></SignUp>
        },
        {
            path : 'private',
            element : <PrivateRoute></PrivateRoute>
        }
       
      ]
    },
  ]);