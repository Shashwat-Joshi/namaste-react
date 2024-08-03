import { CDN_URL1 } from "../utils/constants";
export const RestaurantCard = ({resData}) => {

    const { name, cuisines, costForTwo,cloudinaryImageId, avgRatingString } = resData?.info;
    const { deliveryTime } = resData?.info?.sla;
    return (
        <div className="card">
                    <img src= {CDN_URL1 + cloudinaryImageId} ></img>
                    <h3>{name}</h3>
                    <h4>{cuisines.join(', ')}</h4>
                    <h4>{avgRatingString}</h4>
                    <h4>{deliveryTime} minutes</h4>
                    <h4>{costForTwo}/2</h4>
        </div>
    );
}

