import { MENU_API } from "./Constants"
import  {useState, useEffect }  from 'react'

const useRestaurantMenu = (id) => {
const [resInfo , setResInfo] = useState(null)
    useEffect(()=>{
        fetchData ()
    },[])
    const fetchData = async() =>{
        const res = await fetch( MENU_API + id);
        const data = await res.json();
        // console.log("in useRestaurantMenu")
        // console.log(data)
        setResInfo(data?.data)  
    }
    return resInfo
}
export default useRestaurantMenu