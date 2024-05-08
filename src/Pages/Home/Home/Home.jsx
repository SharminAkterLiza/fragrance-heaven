import PopularItems from "../../PopularItems/PopularItems";
import Banner from "./Banner/Banner";
import GWcategory from "./GWcategory/GWcategory";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           
           <GWcategory></GWcategory>
           <PopularItems></PopularItems>
        </div>
    );
};

export default Home;