import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header"
import Body from "./src/components/Body"
import About from "./src/components/About"
import ContactUs from "./src/components/ContactUs"
import Error from "./src/components/Error"
import { createBrowserRouter,RouterProvider } from "react-router";
import { Outlet } from "react-router"
import RestaurantMenu from "./src/components/RestaurantMenu"
/*
Header 
    Logo
    Nav Items
Body
    Search
    RestaurantContainer
        RestaurantCard
            Img
            Name of Restaurant, Rating, cuisine, delivery Time
Footer
    copyright
    links 
    Address
    Contact
*/

// const styleCard = {
//     backgroundColor:"#f0f0f0"
// }
// way to give css



const AppLayout = ()=>{
    return (
        <div className="app">
            <Header/>
            {/* <Body/> */}
            <Outlet/>
        </div>
    )
}
const appRouter =createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<ContactUs/>
            },
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>
            },

        ]

    },
    
])
const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(<AppLayout/>)
root.render(<RouterProvider
 router = {appRouter}
 />)