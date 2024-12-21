import { CDN_URL1 } from "../utils/constants";

const CategoryItem = ({data}) => {
    return (
        <div className="py-4 border-b-2 text-left flex justify-between"> 
            <div className = 'w-9/12'>
                <h2 className="font-bold">{data.card.info.name}</h2>
                <h3 className="font-semibold">₹ {(data.card.info.price/100)}</h3>
                <h5 className="text-green-600 font-bold">{data.card.info.ratings.aggregatedRating?.rating}</h5>
                <p>{data.card.info.description}</p>
            </div>
            <div className = 'w-3/12'>
                <img src= {CDN_URL1 + data.card.info.imageId} ></img>
                <span>
                    <button className="bg-teal-300 rounded-md px-2 py-1 ">
                        Add +
                    </button>
                </span>
            </div>
            
        </div>
    )
};

export default CategoryItem;