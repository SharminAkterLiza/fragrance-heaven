
const ShowPopularItems = ({popularItem}) => {
    const {name,image,price} = popularItem;
    return (
        
<div>
   
<div className="border flex flex-col items-center justify-center  pb-4">
<img className="h-[200px] w-[200px]" src={image} alt="" />
<div>
    <h2 className="font-bold ">{name}</h2>
    <h2 className="font-bold text-center">Price : <span className="text-orange-500"> {price}</span> Tk</h2>
</div>
        </div>
</div>
    );
};

export default ShowPopularItems;