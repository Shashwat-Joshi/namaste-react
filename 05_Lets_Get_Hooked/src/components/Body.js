import { RestaurantCard } from "./RestaurantCard";
import { resObj } from "../utils/mockData";
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search bar aaega idhar (meow!)</div>
            <div className="card-container">
                {resObj.map((restaurant) => (
                    <RestaurantCard key = {restaurant.info.id} resData = {restaurant} />
                ))}
            </div>
        </div>
    );
}

export default Body;