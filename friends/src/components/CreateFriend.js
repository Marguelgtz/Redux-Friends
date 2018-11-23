import React from 'react';

class AddFriend extends React.Component {
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
  }

  AddFriendHandler = e => {

  }

  render() { 
    return (
      <div className="add-friend-form">
        <h3>New Friend?</h3>
        <form onSubmit={this.AddFriendHandler}>
          <p>Name:</p>
          <input type="text"
          onChange={this.inputHandler}
          placeholder="Name"
          value={this.state.name}
          name="name" />
          <p>Age:</p>
          <input type="number"
          onChange={this.inputHandler}
          placeholder="Age"
          value={this.state.age}
          name="age" />
          <p>Email:</p>
          <input type="text"
          onChange={this.inputHandler}
          placeholder="Email"
          value={this.state.email}
          name="email" />
        </form>
        <button>Create Friend</button>
      </div>
    );
  }
}

export default AddFriend;