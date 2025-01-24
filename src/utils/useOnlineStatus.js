import { useEffect } from "react";

const useOnlineStatus = ()=>{
    const [onlineStatus,setOnlineStatus] = useState(false)
    addEventListener("online", (event) => {});
       ononline = (event) => {};
    // useonlineStatus will be a boolean 
    useEffect(()=>{
        addEventListener("online",(event)=>{
            setOnlineStatus(true)
        })
    },[])
    return onlineStatus
}
export default useOnlineStatus