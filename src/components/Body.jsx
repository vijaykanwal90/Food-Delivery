import RestaurantCard from "./RestaurantCard";
import resList from "../utils/RestaurantData";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const newResData = [
    {
      info: {
        id: "618033",
        name: "Jai Ganesh Bhojnalaya",
        cloudinaryImageId: "yzgqriufpzmloogcn2vl",
        locality: "Railway Colony",
        areaName: "Bus stand",
        cuisines: ["North Indian", "South Indian", "Indian", "Chinese"],
        avgRating: 4,
        sla: {
          deliveryTime: 46,
          lastMileTravel: 11,
        },
      },
    },
    {
      info: {
        id: "618039",
        name: "KFC",
        cloudinaryImageId: "yzgqriufpzmloogcn2vl",
        locality: "Railway Colony",
        areaName: "Bus stand",
        cuisines: ["North Indian", "South Indian", "Indian", "Chinese"],
        avgRating: 4.7,
        sla: {
          deliveryTime: 46,
          lastMileTravel: 11,
        },
      },
    },
    {
      info: {
        id: "618027",
        name: "DOMINOS",
        cloudinaryImageId: "yzgqriufpzmloogcn2vl",
        locality: "Railway Colony",
        areaName: "Bus stand",
        cuisines: ["North Indian", "South Indian", "Indian", "Chinese"],
        avgRating: 4.1,
        sla: {
          deliveryTime: 36,
          lastMileTravel: 11,
        },
      },
    },
    {
      info: {
        id: "218037",
        name: "QFC",
        cloudinaryImageId: "yzgqriufpzmloogcn2vl",
        locality: "Railway Colony",
        areaName: "Bus stand",
        cuisines: ["North Indian", "South Indian", "Indian", "Chinese"],
        avgRating: 2.4,
        sla: {
          deliveryTime: 46,
          lastMileTravel: 11,
        },
      },
    },
    {
      info: {
        id: "658037",
        name: "PIZZA BITE",
        cloudinaryImageId: "yzgqriufpzmloogcn2vl",
        locality: "Railway Colony",
        areaName: "Bus stand",
        cuisines: ["North Indian", "South Indian", "Indian", "Chinese"],
        avgRating: 3.4,
        sla: {
          deliveryTime: 46,
          lastMileTravel: 11,
        },
      },
    },
    {
      info: {
        id: "618837",
        name: "TARA FAST FOOD",
        cloudinaryImageId: "yzgqriufpzmloogcn2vl",
        locality: "Railway Colony",
        areaName: "Bus stand",
        cuisines: ["North Indian", "South Indian", "Indian", "Chinese"],
        avgRating: 4.5,
        sla: {
          deliveryTime: 46,
          lastMileTravel: 11,
        },
      },
    },
  ];
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("")
  const [filteredData, setFilteredData]  = useState([])
  const fetchData = async()=>{
    try{
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
              const result = await response.json()
      
      console.log(result)
      // console.log(result.data.cards[0].card.card.gridElements.infoWithStyle.restaurants)
      setlistOfRestaurants(result.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    }
    catch(error){
       console.log("fetching error" + error.message)
    }
    
  } 
  useEffect(()=>{
      fetchData()

  },[])
  if(listOfRestaurants.length===0){
    return (
      // <div>Loading..........</div>
      <Shimmer/>
    )
  }
  const search = ()=>{
    console.log(listOfRestaurants[0].info.name)
    // fetchData()
    // setlistOfRestaurants(result.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
      
     const filtereddata = listOfRestaurants.filter((res)=>{
        return res.info.name.toLowerCase().includes(searchText.toLowerCase())
     })
     setFilteredData(filtereddata)
  }
  return (
    <div className="body">
      {/* <Shimmer/> */}
      <div className="search-filter">
        <div className="search">
          <input type="text" placeholder="search the restaurants" onChange={(e)=>{
            setSearchText(e.target.value)
          }} />
          <button className="search-btn" onClick={search} >Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => (res = res.info.avgRating > 4)
            );
            setlistOfRestaurants(filteredList);
            console.log("BUtton clicked");
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {/* Restaurant card
         */}
        {/* <RestaurantCard name="Meghna Foods" cusines="Biryani , Chinese, Indian"/>
                 <RestaurantCard name="KFC" cusines="Chicken wings , Burger"/> */}
        {/* <RestaurantCard name={resData[0].info.name}/> */}
        {/* <RestaurantCard  resInfo={resData[0]}/>
                 <RestaurantCard  resInfo={resData[1]}/>
                 <RestaurantCard  resInfo={resData[2]}/>
                 <RestaurantCard  resInfo={resData[3]}/>
                 <RestaurantCard  resInfo={resData[4]}/>
                 <RestaurantCard  resInfo={resData[5]}/> */}

        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resInfo={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
