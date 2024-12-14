import { LOGO } from "../utils/Constants"
import {useState,useEffect} from "react"
import { Link } from "react-router"
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
                    <li> <Link to="/">Home</Link>       </li>
                    <li> <Link to="/about">About Us</Link>    </li>
                    <li>  <Link to="/contact">Contact Us</Link>    </li>
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