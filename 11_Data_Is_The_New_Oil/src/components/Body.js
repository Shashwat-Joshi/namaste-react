import { RestaurantCard } from "./RestaurantCard";
import { resObj } from "../utils/mockData";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./ShimmerComponent";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../utils/userContext";

const Body = () => {
    const [listOfRes, setListOfRes] = useState([]);
    const [filteredListOfRes, setFilteredListOfRes] = useState([]);
    const [searchText, setSearchText] = useState("");
    const {setUserName, loggedInUser} = useContext(UserContext);

    console.log('Body rendered');
    useEffect(() => {
        fetchData();
        //setListOfRes()
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const jsonData = await data.json();
        console.log(jsonData);

        setListOfRes(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredListOfRes(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    //conditional rendering
    const onlineStatus = useOnlineStatus();
    
    if(onlineStatus === false) {
        return (
            <h1>
                Looks like you are offline! Please check your internet connection!!
            </h1>
        )
    }
    if(listOfRes.length === 0) {
        return <Shimmer/>
    }
    return (
        <div className="body">
            <div className="filter flex p-4 justify-center">
                <div className="search">
                    <input className="border border-solid border-teal-700 w-96 h-8 rounded-lg" type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                    <button className="searchBtn bg-teal-500 mx-2 px-3 py-2 rounded-full" onClick={() => {
                        const filteredRes = listOfRes.filter((res) => 
                            res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredListOfRes(filteredRes);
                    }}>Search</button>
                </div>
                <button className="filter-btn bg-teal-500 mx-2 px-3 py-2 rounded-full" onClick={() => {
                    const topResList = listOfRes.filter((res) =>
                        res.info.avgRating >= 4);
                    setFilteredListOfRes(topResList);
                }}>
                    Top Restaurants in town!
                </button>
            </div>
            <div>
                <form>
                    <label>User Name: </label>
                    <input className="border border-solid border-t-black" type="text" onChange={(e) => setUserName(e.target.value)} value={loggedInUser}/>
                </form>
                
            </div>
            <div className="card-container flex flex-wrap">
                {filteredListOfRes.map((restaurant) => (
                    // <Link 
                    // key = {restaurant.info.id} to = {"/restaurant/" + restaurant.info.id}>
                    // <RestaurantCard  resData = {restaurant} /></Link>
                    <Link to = {"/restaurant/"+restaurant.info.id}><RestaurantCard  resData = {restaurant} /></Link>
                ))}
            </div>
        </div>
    );
}

export default Body; 