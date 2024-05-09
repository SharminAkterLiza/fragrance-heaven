import {
    createBrowserRouter,
    
  } from "react-router-dom";

import Home from "../Pages/Home/Home/Home";
import Main from "../Layout/Main/Main";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import Dashboard from "../Layout/Main/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import ContactUs from "../Pages/ContactUs/ContactUs";

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
        },
        {
          path : 'contact',
          element : <ContactUs></ContactUs>
      },
       
        

      ]
    },

    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
      children:[
        {
          path:'cart',
          element: <Cart></Cart>
        }
      ]
    }

  ]);