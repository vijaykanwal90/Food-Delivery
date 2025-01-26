import React from 'react'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router';
import { MENU_API, CDN_LINK } from "../utils/Constants"
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';
const RestaurantMenu = () => {

  const { id } = useParams();
  // console.log(id)
  const resInfo = useRestaurantMenu(id)
  // console.log("in ui resinfo")
  // console.log(resInfo)
  const [showItem,setShowItem] = useState(false)
  const [showIndex,setShowIndex] = useState(null)



  if (resInfo === null) {
    return <Shimmer />
  }
  // const { name, cuisines, city, costForTwo, areaName,completeAddress } = resInfo.cards[2].card?.card?.info
  console.log(resInfo)
  const {name} = resInfo?.cards[2]?.card?.card?.info
  // const itemCard = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards)
  const categories = resInfo?.cards[4].groupedCard?.cardGroupMap.REGULAR?.cards.filter((category) =>
    category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
console.log("show item in menu ",showItem)
 
  return (
    <div className='text-center'>
      <h1 className='my-10 font-bold text-2xl'>{name}</h1>
      {categories.map((category,index)=>{
            return (
              <RestaurantCategory
                key = {category.card.card.title}
                 data ={category?.card?.card}
                //  showIndex= {showIndex}
                //  setShowIndex={()=>
                 
                //   setShowIndex(index)
                //  }
                //  showItem={showIndex===index && showItem}
                 
                //  setShowItem={()=>
                //   setShowItem(!showItem)}
                showItem={showIndex === index} // Show items if the current index matches showIndex
                setShowIndex={() => setShowIndex(showIndex === index ? null : index)}
                

                 />
            )
      })}




    </div>
  )
}

export default RestaurantMenu