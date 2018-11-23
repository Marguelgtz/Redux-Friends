import React, { Component } from 'react';
import './App.css';

import FriendsList from './FriendList';
import CreateFriend from './CreateFriend';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FriendsList />
        <CreateFriend />
      </div>
    );
  }
}

export default App;
