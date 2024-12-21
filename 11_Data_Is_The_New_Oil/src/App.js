import React,{Suspense, lazy, useEffect,useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import {Outlet, RouterProvider, createBrowserRouter} from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/userContext";

//import Grocery from "./components/Grocery";

const AppLayout = () => {

    const [userName, setUserName] = useState();

    useEffect(() => {

        const data = {
            name: 'Abha Garg'
        };
        setUserName(data.name);
    }, []);
    return (
        <UserContext.Provider value = {{loggedInUser: userName, setUserName}}>
            <div className="app">
                <Header/>
                <Outlet/>
            </div>
        </UserContext.Provider>
        
    )
}

const Grocery = lazy(() => import("./components/Grocery"));

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path:"/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
            },
            {
                path: "/grocery",
                element: <Suspense fallback = "Loading...">
                    <Grocery/>
                </Suspense>
            }
        ], 
        errorElement: <Error/>
    },

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);

