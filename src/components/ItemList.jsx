import React from 'react'
import { CDN_LINK } from '../utils/Constants'

const ItemList = ({ item }) => {

    return (
        <div className=' flex flex-col ' >
            {item.map((dish) => (
                <div className='flex flex-row items-between border-2 rounded-lg shadow-xl mx-auto p-2 my-2'>
                    <div className='w-9/12 flex flex-col'>
                        <span className='font-bold'>{dish.card.info.name}</span>
                        <span className='text-green-500 font-bold'>₹{dish.card.info.price ?  dish.card.info.price/100 : dish.card.info.defaultPrice/100}</span>
                        <p>{dish.card.info.description}</p>

                    </div>
                    <div className='w-3/12 py-auto'>
                        <div className='absolute bg-black text-white rounded-lg p-1 '>ADD + </div>
                        <img src={CDN_LINK + dish.card.info.imageId} alt="" />
                    </div>
                </div>

            )

            )}


        </div>
    )
}

export default ItemList
