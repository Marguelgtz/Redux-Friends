import React from 'react';

const Friend = props => {
  return (
    <div className="friend-container">
      <h2>{props.name}</h2>
    <div className="friend-info">      
      <ul> <b>Age:</b> {props.age}</ul>
      <ul> <b>Email:</b> {props.email}</ul>
    </div>
    </div>
  )
}
export default Friend;