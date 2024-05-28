import { RestaurantCard } from "./RestaurantCard";
import { resObj } from "../utils/mockData";
import { useState } from "react";
const Body = () => {
    const [listOfRes, setListOfRes] = useState(resObj);
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