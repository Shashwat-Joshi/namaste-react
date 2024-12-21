import CategoryItem from "./CategoryItems";
import { useState } from "react";

const RestaurantCategory = ({data, showItems, setActiveIndex}) => {

    console.log("inside accordion", data);
    // const [isOpen, setIsOpen] = useState(false);

    // const handleClick = () => {
    //     return setIsOpen(!isOpen);
    // }

    return (
        <div>
            <div className="w-1/2 shadow-md m-auto p-6 ">
                <div className = 'flex justify-between cursor-pointer' onClick = {setActiveIndex}>
                    {/* Header */}
                    <h1 className="font-bold">{data.title} ({data.itemCards.length}) </h1>
                    <span>⬇️</span>
                </div>
                {showItems && <div>
                    {/* body */}
                    {data.itemCards.map((item) => (
                        <CategoryItem data={item}/>
                    ))}
                    
                </div>}
            </div>
            
        </div>
    );
}

export default RestaurantCategory;