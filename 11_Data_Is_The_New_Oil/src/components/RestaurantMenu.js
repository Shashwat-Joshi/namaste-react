import { useEffect, useState } from "react";
import Shimmer from "./ShimmerComponent";
import MenuItem from "./MenuItem/MenuItem";
//import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = () => {
    
    const {resId} = useParams();
    const {resData,resMenu} = useRestaurantMenu(resId);

    const [activeIndex, setActiveIndex] = useState(0);
    //const [showItems, setShowItems] = useState(true);

    if(Object.keys(resData).length === 0 || Object.keys(resMenu).length === 0) {
        return <Shimmer/>
    }
    
    const { name,avgRating, costForTwoMessage, cuisines } = resData?.data?.cards[2]?.card?.card?.info;
    //const {itemCards} = resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    const category = resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log('categories', category);
    console.log(resMenu);
    return (
        <div className="menu-card p-4 text-center">
            <h1 className="font-bold my-5 text-2xl">{name}</h1>
            <p className="text-lg"> {avgRating} Rating - {costForTwoMessage}</p>
    
            <h4 className="text-teal-600 font-bold">{cuisines.join(",  ")}</h4>
            <div className="categories">
                {
                    category.map((item, index) => (
                        <RestaurantCategory data = {item.card.card} showItems = {index === activeIndex && true} setActiveIndex = {() => setActiveIndex(index)}/>
                    ))
                }
            </div>
        </div>
    );
}
export default RestaurantMenu;
