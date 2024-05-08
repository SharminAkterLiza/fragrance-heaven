
const ProductCard = ({item}) => {
    const {image,name,price} = item;
    return (
        <div className="mt-10">
   
<div className="border flex flex-col items-center justify-center  pb-4">
<img className="h-[200px] w-[200px]" src={image} alt="" />
<div>
    <h2 className="font-bold ">{name}</h2>
    <h2 className="font-bold text-center">Price : <span className="text-orange-500"> {price}</span> Tk</h2>
</div>
<button className="shadow-lg btn border-none px-16  text-white 
                    mt-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-300 justify-center btn-outline">Quick Add </button>
        </div>
        
</div>
    );
};

export default ProductCard;