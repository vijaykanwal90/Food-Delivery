import React from 'react'
import { useState,useEffect } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router';
import  {MENU_API,CDN_LINK} from "../utils/Constants"
const RestaurantMenu = () => {
    
    const {id } = useParams();
    const resInfo = useResutaurantMenu(resId)
    
   
    

  if(resInfo ===null){
    return <Shimmer/>
  }
  const {name,cuisines,city,costForTwo,areaName} = resInfo.cards[2].card?.card?.info
  const itemCard = resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
  const recomendeddish = itemCard.itemCards
console.log(itemCard)
// console.log(resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2])
  return (
    <div>
        <h1>{name}</h1>
        {/* <div><img src={CDN_LINK +imageId} alt="" /></div> */}
        <h2>{areaName} - {city}</h2>
        <h2>{cuisines.join(", ")}</h2>
        <h3> Rs.{costForTwo/100} for two</h3>
        <h3>{itemCard.title}</h3>
        <ul>
           { recomendeddish.map((item)=>{
            return ( <li key={item.card.info.id}>
            {item.card.info.name} <span style={{ color: item.card.info.isVeg === 1 ? "green" : "red" }}>
  {item.card.info.category}
</span>

        </li>)
            })}
            
        </ul>
    </div>
  )
}

export default RestaurantMenu