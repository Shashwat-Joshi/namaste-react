import { CDN_URL2 } from "../../utils/constants";
import "./MenuItem.css";
const MenuItem = ({item}) => {
    
    return (
        <div className="itemCard">
            <div className="cardInfo">
                <h3>{item.card.info.name}</h3>
                <p>{item.card.info.description}</p>
                <p className="itemPrice"><span class="currency">IND</span>{item.card.info.price/100 || item.card.info.defaultPrice/100} </p>
            </div>
            <div className="itemPic">
                <img src = {CDN_URL2 + item?.card?.info?.imageId}></img>
            </div>
        </div>
    );
};

export default MenuItem;