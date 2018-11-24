import React from 'react';

const Friend = props => {
  return (
    <div className="friend-container">
      <h2>{props.name}</h2>
    <div className="friend-info">    
      <p></p>  
      <p> <b>Age:</b> {props.age}</p>
      <p> <b>Email:</b> {props.email}</p>
    </div>
    <button>Update Friend</button>
    <button>Delete Friend</button>
    </div>
  )
}
export default Friend;