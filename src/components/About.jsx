import React from 'react'
import User from './User'
import UserClass from './UserClass'
// const About = () => {

  
//   return (
//     console.log("render of about"),
//     <div>
//       <h2>ABout us Page</h2>
//       <User name= {"vijay kanwal" } city = {"Dehradun"}/>
//       <UserClass name={"vijay "} />
//       <UserClass name={"vivek "}  />



//     </div>

//   )
// }
class About extends React.Component {
  constructor(props){
    super(props)
      console.log("constructor of about")
  }
  render (){
    console.log("render of about")
    return (
      <div>
        <h2>About Us Page</h2>
        {/* <UserClass name= {"vijay kanwal" } city = {"Dehradun"}/>
        <UserClass name={"vijay "} /> */}
        <div className='user-container'>
        <UserClass name={"vijaykanwal90"}/>
        <UserClass name={"vivekrawat21"} />
        </div>
       
      </div>
    )
  }
}

export default About