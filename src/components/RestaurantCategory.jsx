import React from 'react'
import ItemList from './ItemList'
import { useState } from 'react'
const RestaurantCategory = ({ data , showItem ,setShowIndex}) => {
    // const [showItems ,setShowItems] = useState(false)
    //   const [showItems,setShowItems] = useState(false)
    
    const handleClick = ()=>{
        setShowIndex()
    }
    // console.log("this is list of restuarunt category", data)
    return (
        <div >
            <div onClick={handleClick} className='w-6/12 m-2 p-2 flex justify-between border-2 rounded-lg shadow-xl mx-auto cursor-pointer bg-gray-100'>
                
                    <span className='font-bold tex-lg'>{data.title} ({data.itemCards.length})</span>
                    <span>⬇️</span>
        


            </div>
            <div className='flex flex-col items-center w-6/12 mx-auto  '>
            {
                showItem && 
                <ItemList
                 key={data.title} 
                 item={data.itemCards}
                 
                  />
            }
                


            </div>
        </div>
    )
}

export default RestaurantCategory
