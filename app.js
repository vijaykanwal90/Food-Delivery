import React from "react"
import ReactDOM from "react-dom/client"

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
const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://shorturl.at/BavJk"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>  Home      </li>
                    <li>  About Us    </li>
                    <li>   Contact Us     </li>
                    <li>   Cart     </li>


                </ul>
            </div>


        </div>
    )
}
// const styleCard = {
//     backgroundColor:"#f0f0f0"
// }
// way to give css
const RestaurantCard = ()=>{
    return (
        // <div className="res-card" style={styleCard}>
        //     <h1>Meghna Foods</h1>

        // </div>
         <div className="res-card">
         <img className="res-logo" alt="food-logo" src="https://shorturl.at/U3KEn"/>
         <h3>Meghna Foods</h3>
         <h4>Biryani , Chinese, Indian</h4>
         <h5>4.4 Stars</h5>
         <h5>39 Minutes</h5>
     </div>
    )
}
const Body = ()=>{
    return (
        <div className="body">
            <div className="search" >
            Search
            </div>
            <div className="res-container">
                {/* Restaurant card
                 */}
                 <RestaurantCard/>
                 <RestaurantCard/>
                 <RestaurantCard/>
                 <RestaurantCard/>
                 <RestaurantCard/>
                 <RestaurantCard/>
                 <RestaurantCard/>
                 <RestaurantCard/>
                 <RestaurantCard/>
                 <RestaurantCard/>
                 <RestaurantCard/>
                 <RestaurantCard/>
                 <RestaurantCard/>
                 <RestaurantCard/>
                 <RestaurantCard/>

            </div>
        </div>
    )
}

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