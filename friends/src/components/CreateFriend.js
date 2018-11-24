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
      id: null,
    }
  }

  inputHandler = e => {
    const newId = Date.now();
    this.setState({
      [e.target.name]: e.target.value,
      id: newId,
    })
    console.log("input handled");

  }

  AddFriendHandler = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.addFriend(this.state);
    this.setState({
      name: '',
      age: null,
      email:'',
      id: null,
      })
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
              name="name"
              value={this.state.name} />
            <p>Age:</p>
            <input 
              type="number"
              onChange={this.inputHandler}
              placeholder="Age"
              name="age"
              value={this.state.age || ''} />
            <p>Email:</p>
            <input 
              type="text"
              onChange={this.inputHandler}
              placeholder="Email"
              name="email"
              value={this.state.email} />
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