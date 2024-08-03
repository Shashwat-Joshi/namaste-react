import { useEffect, useState } from "react";
import Shimmer from "./ShimmerComponent";
import MenuItem from "./MenuItem/MenuItem";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {
    const [resData, setResData] = useState({});
    const [resMenu, setResMenu] = useState([]);
    const {resId} = useParams();
    useEffect(() => {
        fetchMenuData();
    },[]);

    const fetchMenuData = async () => {

        const resData = await fetch(MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER");
        const jsonData = await resData.json();
        //console.log(jsonData);
        setResData(jsonData);
        setResMenu(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    }
    

    if(Object.keys(resData).length === 0) {
        return <Shimmer/>
    }
    //const { name } = resData?.data?.cards[2]?.card?.card?.info;
    const { name,avgRating, costForTwoMessage, cuisines } = resData?.data?.cards[2]?.card?.card?.info;
    //const {itemCards} = resData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    console.log(resMenu);
    return (
        <div>
            <h1>RestaurantCard</h1>
            <h1>{name}</h1>
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
