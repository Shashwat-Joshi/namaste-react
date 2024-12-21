import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../utils/userContext";
const Header = () => {

    const [btnName, setBtnName] = useState('Login');
    const onlineStatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    return (
        <div className="flex justify-between bg-teal-500 opacity-75 shadow-lg">
            <div className="logo-container w-48">
                <img className = 'logo'src = {LOGO_URL}/>
            </div>                                        
            <div className="nav-items">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online {onlineStatus == true? "🟢": "🔴"}</li>
                    <li className="px-4"><Link to = "/">Home</Link></li>
                    <li className="px-4"><Link to = "/about">About Us</Link></li>
                    <li className="px-4"><Link to = "/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to = "/grocery">Grocery</Link></li>
                    <li className="px-4">Cart</li>
                    <li className="px-4">{loggedInUser}</li>
                    <button className="px-4" onClick={() => 
                        btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login')
                    }>{btnName}</button>
                </ul>
            </div>
        </div>
    );
}

export default Header;