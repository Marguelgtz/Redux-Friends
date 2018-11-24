import React from 'react';
import {connect} from 'react-redux';
import {addFriend} from '../actions/friendsActions';

class CreateFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      age: null,
      email:'',
    }
  }

  inputHandler = e => {
    this.setState({[e.target.name]: e.target.value})
    console.log("input handled");
  }

  AddFriendHandler = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.addFriend();
  }

  render() { 
    return (
      <div className="add-friend-form">
        <h3>New Friend</h3>
        <div className="form-container">
          <form onSubmit={this.AddFriendHandler}>
            <p>Name:</p>
            <input 
              type="text"
              onChange={this.inputHandler}
              placeholder="Name"
              name="name" />
            <p>Age:</p>
            <input 
              type="number"
              onChange={this.inputHandler}
              placeholder="Age"
              name="age" />
            <p>Email:</p>
            <input 
              type="text"
              onChange={this.inputHandler}
              placeholder="Email"
              name="email" />
            <button type="submit">Create Friend</button>
          </form>
      </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends,
})

export default connect(mapStateToProps, {addFriend})(CreateFriend)