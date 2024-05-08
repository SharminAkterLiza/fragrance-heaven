import { useEffect, useState } from "react";

const useAllProducts = () =>{
    const [allItems, setAllItems] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        fetch('http://localhost:5000/allProducts')
        .then(res=> res.json())
        .then(data=>{

            setAllItems(data);
            setLoading(false);
        });
            
     }, [])
return [allItems,loading];
}

export default useAllProducts;