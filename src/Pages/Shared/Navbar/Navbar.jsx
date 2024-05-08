import { Link } from 'react-router-dom';
// import logo from '../../../assets/Home/fh-logo.png';
const Navbar = () => {
    return (
        <div>
<div className="flex">
    {/* ----------------------logo */}
    <div className='m-4 '>
    <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 text-transparent bg-clip-text">Fragrance Heaven</h1>

    </div>
    {/* --------------link */}
    <div className='space-x-8 font-extrabold lg:ml-20 my-auto'>
<Link> Home </Link>
<Link to="/shop"> Shop </Link>
<Link> Best Selling </Link>
<Link> Shop By Category </Link>
<Link> Contact Us </Link>
<Link> FAQ </Link>
    </div>
    {/* ----------------------------button */}
    <div>

    </div>
</div>
        </div>
    );
};

export default Navbar;