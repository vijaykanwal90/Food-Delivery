import RestaurantCard , {withPromotedLabel} from "./RestaurantCard";
import resList from "../utils/RestaurantData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { redirect } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

import { Link } from "react-router";
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
  const [filteredData, setFilteredData] = useState([])
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const fetchData = async () => {
    try {
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      // const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const result = await response.json()

      console.log(result)
      // console.log(result.data.cards[0].card.card.gridElements.infoWithStyle.restaurants)
      setlistOfRestaurants(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      console.log(result?.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      console.log(listOfRestaurants[0]?.info?.name)
    }
    catch (error) {
      console.log("fetching error" + error.message)
    }

  }
  useEffect(() => {
    fetchData()

  }, [])

  // useEffect (()=>{

  // }) this useEffect will be called on every render


  // useEffect (()=>{

  // }[]) this useEffect will be called on initial render only


  // useEffect (()=>{

  // },[searchText]) this useEffect will be called when searchText updates
  const search = () => {
    console.log(listOfRestaurants[0].info.name)
    // fetchData()
    // setlistOfRestaurants(result.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)

    const filtereddata = listOfRestaurants.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase())
    })
    setFilteredData(filtereddata)
  }

  const onlineStatus = useOnlineStatus()
  console.log("status of online is " + onlineStatus)
  if (onlineStatus === false) {
    return (
      <h1>Looks like you are offline Please check your connection </h1>
    )
  }



  return listOfRestaurants.length === 0 ? (
    <Shimmer />)
    :
    (
      <div className=" flex flex-col m-4 ">
        {/* <Shimmer/> */}
        <div className="flex item-center px-6 ">
          <div className="search">
            <input className="border border-solid border-black px-2" type="text" placeholder="search the restaurants" onChange={(e) => {
              setSearchText(e.target.value)
            }} />
            <button className="border border-solid border-black bg-amber-500 px-4 m-4 rounded-lg hover:cursor-pointer" onClick={search} >Search</button>
          </div>
          <button className="border border-solid border-black bg-amber-500 px-4 m-4 rounded-lg hover:cursor-pointer"

            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => (res = res.info.avgRating > 4)
              );
              setlistOfRestaurants(filteredList);
              console.log("Button clicked");
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="flex flex-wrap gap-4">
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
            <Link key={restaurant.info.id} style={{ textDecoration: "none", color: "inherit" }}
              to={"/restaurant/" + restaurant.info.id}>
                {restaurant.info.isOpen ? <RestaurantCardPromoted resInfo={restaurant}/> : <RestaurantCard resInfo={restaurant}/>}
                 
                 </Link>
          ))}
        </div>
      </div>
    );
};
export default Body;
