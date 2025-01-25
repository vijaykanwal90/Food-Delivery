import { LOGO } from "../utils/Constants"
import {useState,useEffect} from "react"
import { Link } from "react-router"
import useOnlineStatus from "../utils/useOnlineStatus"
export const Header = ()=>{
    const [login,setLogin] = useState('login')
    const onlineStatus = useOnlineStatus()
    // useEffect(()=>{
    
    // },[login])
    
    return (
        <div className="flex  justify-between items-center p-4  bg-gray-300  shadow-lg shadow-gray-500 ">
            <div className="">
                <img className="w-32 rounded-xl" src={LOGO}/>
            </div>
            <div className="flex items-center px-4">
                <ul className="flex p-4 m-4 ">
                    <li className="px-4 hover:cursor-pointer">OnlineStatus : {onlineStatus ? '🟢':'🔴'}</li>
                    <li  className="px-4 hover:cursor-pointer"> <Link to="/">Home</Link>       </li>
                    <li className="px-4 hover:cursor-pointer"> <Link to="/about">About Us</Link>    </li>
                    <li className="px-4 hover:cursor-pointer">  <Link to="/contact">Contact Us</Link>    </li>
                    <li>  <Link to="/groccery">Groccery</Link>    </li>

                    <li className="px-4 hover:cursor-pointer">  Cart     </li>
                    <li className="px-4 hover:cursor-pointer bg-amber-500 h-full py-1 border rounded-lg">  <button onClick={()=>{
                        if(login=="login"){
                            setLogin("logout")
                        }
                        else {
                            setLogin("login")
                        }
                    }}>{login}</button>     </li>



                </ul>
            </div>


        </div>
    )
}
export default Header