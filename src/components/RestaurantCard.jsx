import { CDN_LINK } from "../utils/Constants";
const RestaurantCard = (props)=>{
    // console.log(resInfo[0])
    // const res = resInfo;
    // const {resInfo} = props;
    const {name,cuisines,avgRating,sla,cloudinaryImageId,isOpen} =props.resInfo?.info;
    // const {ImageId} = resInfo.info.badges;
    return (
        // <div className="res-card" style={styleCard}>
        //     <h1>Meghna Foods</h1>

        // </div>

         <div className="res-card">
            <span>{isOpen?"OPENED":"CLOSED"}</span>
         <img className="res-logo" alt="food-logo" src={CDN_LINK +cloudinaryImageId} />
         <h3 style={{textDecoration:"none"}}>{name}</h3>
         {/* { if({isOpen}===True){
            <span>Hello</span>
         }else {
            <span>Bye</span>
         }} */}
         
         
          <h4>{cuisines.join(", ")}</h4> 
         <h5>{avgRating} Stars</h5>
         <h5>{sla.deliveryTime} Minutes</h5> 
     </div>
    )
}
export default RestaurantCard