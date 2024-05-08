import backgroundImage from '../../../../assets/Home/GWcategory/fragrance-mens.avif'; // Import your background image
import backgroundImage2 from '../../../../assets/Home/GWcategory/61R6r2+tmzL.jpg'; // Import your background image
import backgroundImage3 from '../../../../assets/Home/GWcategory/5c0e60ebdcbe2.jpeg'; // Import your background image
import { Link } from 'react-router-dom';


const GWcategory = () => {
    
    return (
        <div className='mx-auto w-2/3  flex gap-10 my-10'>
            <h1></h1>
            <div className="border-2 h-[300px] w-[300px] relative ">
                <div className="absolute inset-0  flex flex-col justify-center 
                items-center   text-center bg-center "
                 style={{ backgroundImage: `url(${backgroundImage})` }}>
                    <h1 className='text-3xl font-bold text-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-600 text-transparent bg-clip-text'>Mens Collection </h1>
                    <Link to="/productCard" ><button className="shadow-lg btn border-none px-16  text-white 
                    mt-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-300 justify-center btn-outline">Shop Now   </button></Link>
                </div>

            </div>
            <div className="border-2 h-[300px] w-[300px] relative ">
                <div className="absolute inset-0  flex flex-col justify-center 
                items-center   text-center bg-center "
                 style={{ backgroundImage: `url(${backgroundImage2})`, backgroundSize: 'cover' }}>
                    <h1 className='text-3xl font-bold text-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-600 text-transparent bg-clip-text'>Womens Collection</h1>
                    <Link to="/productCard"><button className="shadow-lg btn border-none px-16  text-white 
                    mt-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-300 justify-center btn-outline">Shop Now   </button></Link>
                </div>

            </div>
            <div className="border-2 h-[300px] w-[300px] relative ">
                <div className="absolute inset-0   flex flex-col justify-center 
                items-center   text-center bg-center "
                 style={{ backgroundImage: `url(${backgroundImage3})`, backgroundSize: 'cover' }}>
                    <h1 className='text-3xl font-bold text-center bg-gradient-to-r from-purple-600 via-pink-500 to-red-600 text-transparent bg-clip-text'>All Collection</h1>
                    <Link to="/productCard"><button className="shadow-lg btn border-none px-16  text-white 
                    mt-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-300 justify-center btn-outline">Shop Now   </button></Link>
                </div>

            </div>
           
          
        </div>
    );
};

export default GWcategory;
