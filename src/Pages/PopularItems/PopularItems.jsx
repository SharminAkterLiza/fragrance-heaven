import { useEffect, useState } from "react";
import ShowPopularItems from "../ShowPopularItems/ShowPopularItems";

const PopularItems = () => {
    const [popularItems, setPopularItems] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data=> {
            const popular =data.filter(popularItem => popularItem.category=== 'ladies');
            setPopularItems(popular)
        } )
     }, [])
    return (

        
       <div>
        <div>
            <h1 className="text-4xl font-bold text-center my-7">---------- Popular Items ----------</h1>
        </div>
         <div className=" flex-col grid grid-cols-4 gap-5 px-5 m-5">


{
popularItems.map(popularItem => <ShowPopularItems
key={popularItem._id}
popularItem={popularItem}
></ShowPopularItems>)
}


    </div>
       </div>
       

    );
};

export default PopularItems;