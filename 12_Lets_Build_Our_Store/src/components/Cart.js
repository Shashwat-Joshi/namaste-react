import { useDispatch, useSelector } from "react-redux";
import CategoryItem from "./CategoryItems";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    console.log('cartItems', cartItems);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return(
        <div className="text-center m-4 p-4">
            <div className="h-1 font-bold "> Cart </div>
            
            <div className="w-6/12 m-auto">
            <button className="m-5 p-2 bg-black text-white rounded-md"
                onClick={handleClearCart}
            >Clear Cart</button>
                {cartItems.length === 0 ? <div> Your cart is empty, add items </div> : 
                    cartItems.map((item) => (
                        <CategoryItem data={item}/>
                    ))
                }
                
            </div>
        </div>
        
    );
}

export default Cart;