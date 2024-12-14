import { LOGO } from "../utils/Constants"
import {useState,useEffect} from "react"
export const Header = ()=>{
    const [login,setLogin] = useState('login')
    // useEffect(()=>{
    
    // },[login])
    
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>  Home      </li>
                    <li>  About Us    </li>
                    <li>  Contact Us     </li>
                    <li>  Cart     </li>
                    <li>  <button onClick={()=>{
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