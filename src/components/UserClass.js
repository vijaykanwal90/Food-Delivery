import React from 'react'
class UserClass extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            user:{
                name:"username",
                location:"location",
                avatar_url:"https://avatars.githubusercontent.com/u/1?v=4",
                bio:"about"


            }
        }
        console.log("Constructor of " + this.props.name)
    }
    async componentDidMount(){
        // console.log("Component Mounted " + this.props.name)
        const res = await fetch(`https://api.github.com/users/${this.props.name}`)
        const data = await res.json()
        this.setState({user:data})

    }
    componentWillUnmount(){
        console.log("Component Unmounted " + this.props.name)
    }
    render (){
        // console.log( "render of "  + {props.name} )
        console.log("render of "  + this.props.name)
        const {name,location,avatar_url,bio} = this.state.user
        return <div className="user-card">
       <h3>Class based component</h3>
       <div className='user-image'> <img src={avatar_url} width={250}  /></div>
       
            <h2>Name: {name}</h2>
        <h2>Location: <span>{location}</span></h2>
        <h4>About :{bio} </h4>
        
        
        </div>
    }   
}
export default UserClass