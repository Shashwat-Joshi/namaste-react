import { RestaurantCard } from "./RestaurantCard";
import { resObj } from "../utils/mockData";
import { useEffect, useState } from "react";
const Body = () => {
    const [listOfRes, setListOfRes] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const jsonData = await data.json();
        console.log(jsonData);

        setListOfRes(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //setListOfRes(resObj);
    }

    if(listOfRes.length === 0) {
        return <h1>Loading..</h1>
    }
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const topResList = listOfRes.filter((res) =>
                        res.info.avgRating >= 4);
                    setListOfRes(topResList);
                }}>
                    Top Restaurants in town!
                </button>
            </div>
            
            <div className="card-container">
                {listOfRes.map((restaurant) => (
                    <RestaurantCard key = {restaurant.info.id} resData = {restaurant} />
                ))}
            </div>
        </div>
    );
}

export default Body; 