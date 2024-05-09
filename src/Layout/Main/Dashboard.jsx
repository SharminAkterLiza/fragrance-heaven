import { FaCalendar, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-white">
<ul className="menu p-4">
    <li>
        <NavLink to="dashboard/userHome"><FaShoppingCart></FaShoppingCart> User Home</NavLink>
        </li>
    <li>
        <NavLink to="dashboard/cart"><FaShoppingCart></FaShoppingCart> My Cart</NavLink>
        </li>
    <li>
        <NavLink to="dashboard/cart"> <FaCalendar></FaCalendar> Add Review</NavLink>
        </li>
    <li>
        <NavLink to="dashboard/cart"> <FaList></FaList> My Orders </NavLink>
        </li>

        <div className="divider"></div>

        <li>
        <NavLink to="/"><FaShoppingCart></FaShoppingCart> <FaMapLocation></FaMapLocation> Home</NavLink>
        </li>
        <li>
        <NavLink to="/shop"> <FaSearch></FaSearch> Shop</NavLink>
        </li>
   
</ul>
            </div>
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;