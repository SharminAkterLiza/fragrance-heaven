import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import useAxioSecure from "../../../hooks/useAxioSecure";

const Cart = () => {
    const [cart,refetch] = useCart();
    const totalPrice = cart.reduce((total,item)=> total+item.price,0)
const axiosSecure = useAxioSecure();
    const handleDelete = id => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            // fetch(`https://spicecraft-cafe-server.onrender.com/carts/${item._id}`, {
            //   method: 'DELETE'
            // })
            //   .then(res => res.json())
            //   .then(data => {
                axiosSecure.delete(`/carts/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                    }
                })
          
          }
        });
    
    
    
    
      }

    return (
        <div>
        <div className="flex justify-evenly">
        <h2 className="text-3xl"> Total Selected Products : {cart.length}</h2>
            <h2 className="text-3xl"> Total Price : {totalPrice}</h2>
            <button className="shadow-lg btn border-none px-16  text-white 
                     bg-gradient-to-r from-purple-500 via-pink-500 to-red-300 justify-center btn-outline " >Pay Method</button>
       
        </div>



{/* -------------------------- */}
<div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              cart.map((item, index) => <tr
                key={item._id}
              >
                <td>
                  {index + 1}
                </td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item.image} alt="Avatar Tailwind CSS Component" />
                    </div>

                  </div>
                </td>
                <td>
                  {item.name}
                </td>
                <td className="text-end">
                  {item.price} Tk
                </td>
                <td>
                  <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg text-red-600 "> <FaTrashAlt></FaTrashAlt> </button>
                </td>
              </tr>)
            }


          </tbody>


        </table>
      </div>

        </div>
    );
};

export default Cart;