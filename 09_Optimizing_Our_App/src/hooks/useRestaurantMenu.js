import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";


const useRestaurantMenu = (resId) => {

    useEffect(() => {
        fetchMenuData();
    },[]);

    const [resData, setResData] = useState({});
    const [resMenu, setResMenu] = useState({});

    const fetchMenuData = async () => {

        const menuData = await fetch(MENU_API + resId + "&catalog_qa=undefined&submitAction=ENTER");
        const jsonData = await menuData.json();
        //console.log(jsonData);
        setResData(jsonData);
        setResMenu(jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    }
    return {resData, resMenu};
}

export default useRestaurantMenu;