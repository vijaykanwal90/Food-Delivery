import RestaurantCard from "./RestaurantCard";
import resList from "../utils/RestaurantData";
import { useState } from "react";
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
  const [listOfRestaurants, setlistOfRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="search">
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
