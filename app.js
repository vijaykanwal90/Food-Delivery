import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./src/components/Header"
import Body from "./src/components/Body"
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
            <Body/>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)