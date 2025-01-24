import React from 'react'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router';
import { MENU_API, CDN_LINK } from "../utils/Constants"
import useRestaurantMenu from '../utils/useRestaurantMenu';
const RestaurantMenu = () => {

  const { id } = useParams();
  // console.log(id)
  const resInfo = useRestaurantMenu(id)
  // console.log("in ui resinfo")
  // console.log(resInfo)




  if (resInfo === null) {
    return <Shimmer />
  }
  const { name, cuisines, city, costForTwo, areaName } = resInfo.cards[2].card?.card?.info
  const itemCard = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card
  const recomendeddish = itemCard?.itemCards || itemCard?.categories[0].itemCards
  console.log(itemCard)
  console.log("recommended dish")
  console.log(recomendeddish)
  // console.log(resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2])
  return (
    <div>
      <h1>{name}</h1>
      {/* <div><img src={CDN_LINK +imageId} alt="" /></div> */}
      <h2>{areaName} - {city}</h2>
      <h2>{cuisines.join(", ")}</h2>
      <h3> Rs.{costForTwo / 100} for two</h3>
      <h3>{itemCard.title}</h3>
     
        
         
            <div className='res-recommended'>
            {recomendeddish.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} <span style={{ color: item?.card?.info.isVeg === 1 ? "green" : "red" }}>
              {item?.card?.info?.category}
            </span>

          </li>
            ))}
          </div>
          
    

    
    </div>
  )
}

export default RestaurantMenu