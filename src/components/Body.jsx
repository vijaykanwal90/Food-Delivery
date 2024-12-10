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
  const fetchData = async()=>{
    try{
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
              const result = await response.json()
      // const response = await fetch("https://www.swiggy.com/api/seo/getListing?lat=12.960059122809971&lng=77.57337538383284&isDineoutCollection=false", {
      //   "headers": {
      //     "accept": "*/*",
      //     "accept-language": "en-US,en;q=0.9",
      //     "content-type": "application/json",
      //     "latitude": "12.960059122809971",
      //     "longitude": "77.57337538383284",
      //     "priority": "u=1, i",
      //     "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
      //     "sec-ch-ua-mobile": "?0",
      //     "sec-ch-ua-platform": "\"Linux\"",
      //     "sec-fetch-dest": "empty",
      //     "sec-fetch-mode": "cors",
      //     "sec-fetch-site": "same-origin",
      //     "cookie": "__SW=BY0iZ5aC6yl3_fFfDyffpXTFAonLOpA9; _device_id=e8d24d46-c969-cae5-bfdc-076073fbca2a; fontsLoaded=1; _gcl_au=1.1.239490970.1732946437; _guest_tid=2df91f0c-5426-4213-b24c-0d1cd7275f58; _sid=hq03f049-8c1f-4157-9137-129c1ef8d37f; _gid=GA1.2.1110093267.1733857550; _gat_0=1; userLocation={%22address%22:%22Tuntowala%2C%20Morowala%2C%20Clement%20Town%2C%20Dehradun%2C%20Uttarakhand%20248002%2C%20India%22%2C%22area%22:%22%22%2C%22deliveryLocation%22:%22Clement%20Town%22%2C%22lat%22:30.2783241%2C%22lng%22:78.0059814}; dadl=true; _ga_34JYJ0BCRN=GS1.1.1733854968.5.1.1733857572.0.0.0; _ga=GA1.2.1741298733.1733857550",
      //     "Referer": "https://www.swiggy.com/city/bangalore",
      //     "Referrer-Policy": "strict-origin-when-cross-origin"
      //   },
      //   "body": "{\"sortAttribute\":\"relevance\",\"isFiltered\":false,\"queryId\":\"seo-data-9d136bde-2a4f-4e9e-9e51-ded8e9bfa222\",\"seoParams\":{\"apiName\":\"CityPage\",\"brandId\":\"\",\"seoUrl\":\"www.swiggy.com/city/bangalore\",\"pageType\":\"CITY_PAGE\",\"businessLine\":\"FOOD\"},\"widgetOffset\":{\"NewListingView_category_bar_chicletranking_TwoRows\":\"\",\"NewListingView_category_bar_chicletranking_TwoRows_Rendition\":\"\",\"Restaurant_Group_WebView_PB_Theme\":\"\",\"Restaurant_Group_WebView_SEO_PB_Theme\":\"\",\"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo\":\"11\",\"inlineFacetFilter\":\"\",\"restaurantCountWidget\":\"\"},\"nextOffset\":\"CJY7ELQ4KIDo2PLLpvj2UTDUEA==\"}",
      //   "method": "POST"
      // });
      // const result = await response.json()
      console.log(result.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
      setlistOfRestaurants(result.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
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
  return (
    <div className="body">
      {/* <Shimmer/> */}
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
