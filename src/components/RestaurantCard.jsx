import { CDN_LINK } from "../utils/Constants";
const RestaurantCard = (props) => {
   // console.log(resInfo[0])
   // const res = resInfo;
   // const {resInfo} = props;
   const { name, cuisines, avgRating, sla, cloudinaryImageId, isOpen } = props.resInfo?.info;

   return (
      <div className=" mx-6 p-4 w-[300px] h-full rounded-lg bg-gray-100 border border-solid border-black hover:bg-gray-300">  
         
         <img className="rounded-lg" alt="food-logo" src={CDN_LINK + cloudinaryImageId} />
         <h3 className="font-bold py-4 text-xl " style={{ textDecoration: "none" }}>{name}</h3>
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
export const withPromotedLabel = (RestaurantCard) =>{
   return (props) =>{
      return (
         <div>
         <label className="bg-green-400 absolute  ml-6 rounded-md px-2  ">Open</label>
         <RestaurantCard {...props}/>
         </div>
      )
   }
}
export default RestaurantCard