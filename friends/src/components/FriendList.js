import React from 'react';
import {connect} from 'react-redux'; 

import Friend from './Friend';
import {fetchFriends} from '../actions/friendsActions';


class FriendsList extends React.Component {
  
  componentDidMount() {
    this.props.fetchFriends();
  }

  render() { 
    return (
      <div className="friend-list-container">
      <h1>Friends</h1>
        {this.props.loading ? <h1>Loading your Friend List...</h1> : null }
        {this.props.error !== '' ? <h1>{this.props.error}</h1> :null }        
        {this.props.friends.map(friend => {
          return (
            <Friend 
              key={friend.name}
              id={friend.id} 
              name={friend.name}
              age={friend.age}
              email={friend.email} />
          )
        })}
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    friends: state.friends,
    error: state.error,
    loading: state.fetchingFriends,
  }
}

export default connect(MapStateToProps, {fetchFriends})(FriendsList);