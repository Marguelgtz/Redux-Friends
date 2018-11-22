import React from 'react';

const Friend = props => {
  return (
    <div className="friend-container">
      <h3>{props.friend}</h3>
    <div className="friend-info">
      <ul>{props.age}</ul>
      <ul>{props.email}</ul>
    </div>
    </div>
  )
}
export default Friend;