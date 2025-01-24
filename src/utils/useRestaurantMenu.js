import { MENU_API } from "./Constants"
import  {useState, useEffect }  from 'react'

const useRestaurantMenu = (resId) => {
const [resInfo , setResInfo] = useState(null)
    useEffect(()=>{
        fetchData ()
    },[])
    const fetchData = async() =>{
        const res = await fetch( MENU_API + resId);
        const data = await res.json()
        setResInfo(data)  
    }
    return resInfo
}
export default useRestaurantMenu