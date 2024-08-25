import { useEffect, useState } from "react";
import Shimmer from "./ShimmerComponent";
import MenuItem from "./MenuItem/MenuItem";
//import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../hooks/useRestaurantMenu";


const RestaurantMenu = () => {
    
    const {resId} = useParams();
    const {resData,resMenu} = useRestaurantMenu(resId);

    if(Object.keys(resData).length === 0 || Object.keys(resMenu).length === 0) {
        return <Shimmer/>
    }
    
    const { name,avgRating, costForTwoMessage, cuisines } = resData?.data?.cards[2]?.card?.card?.info;
    //const {itemCards} = resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    console.log(resMenu);
    return (
        <div className="menu-card p-4 align-middle">
            <h1 className="font-bold">{name}</h1>
            <h2>{avgRating}</h2>
            <h3>{costForTwoMessage}</h3>
            <h4>{cuisines.join(",  ")}</h4>
            <div className="item-section">
                {
                    resMenu.map((item) => (
                        <MenuItem key = {resMenu?.card?.info?.id} item = {item}/>
                    ))
                }
            </div>
        </div>
    );
}
export default RestaurantMenu;
