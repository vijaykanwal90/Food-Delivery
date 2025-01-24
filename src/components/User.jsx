import React from 'react'

const User = (props) => {
  return (
    <div className="user-card">
      <h3>Function based component</h3>
        <h2>Name: {props.name}</h2>
        <h2>Location: {props.name}</h2>
        <h4>Contact : vijaykanwal18</h4>
    </div>
  )
}

export default User