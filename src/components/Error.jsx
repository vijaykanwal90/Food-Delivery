import { useRouteError } from "react-router"
const Error = ()=>{
    const err = useRouteError();
    console.log(err)
    return (
        <div>
            This is error
        </div>
    )
}
export default Error