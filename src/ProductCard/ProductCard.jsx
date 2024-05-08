// import { useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";

import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import {  useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
import useAxioSecure from "../hooks/useAxioSecure";
import useCart from "../hooks/useCart";



const ProductCard = ({item}) => {
    const {image,name,price, _id} = item;
    // const {user} =useContext(AuthContext);
    const {user} = useAuth();
    const navigate= useNavigate();
    const location = useLocation();
    const axiosSecure = useAxioSecure();
const [,refetch]= useCart();

   
            const handleAddToCart = item => {
                console.log(item);
                if (user && user.email) {
                  const cartItem = { menuItemId: _id, name, image, price, email: user.email }
            // fetch('http://localhost:5000/carts', {
            //   method: 'POST',
            //   headers: {
            //     'content-type': 'application/json'
            //   },
            //   body: JSON.stringify(cartItem)
            // })
            axiosSecure.post('/carts', cartItem)
              .then(res => {
                if (res.data.insertedId) {
                       
                      Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} Added on Cart.`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                      //refetch cart to update the cart items
                      refetch()
                    }

                    else {
                        Swal.fire({
                          title: "Please login for order.",
                          icon: "warning",
                          showCancelButton: true,
                          confirmButtonColor: "#3085d6",
                          cancelButtonColor: "#d33",
                          confirmButtonText: "Login Now!"
                        }).then((result) => {
                          if (result.isConfirmed) {
                            navigate('/login', { state: { from: location } });
                          }
                        });
                      }
              })
            
               
              
          }
        
    }


    return (
        <div className="mt-10">
   
<div className="border flex flex-col items-center justify-center  pb-4">
<img className="h-[200px] w-[200px]" src={image} alt="" />
<div>
    <h2 className="font-bold ">{name}</h2>
    <h2 className="font-bold text-center">Price : <span className="text-orange-500"> {price}</span> Tk</h2>
</div>
<button onClick={handleAddToCart} className="shadow-lg btn border-none px-16  text-white 
                    mt-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-300 justify-center btn-outline">Quick Add </button>
        </div>
        
</div>
    );
};

export default ProductCard;