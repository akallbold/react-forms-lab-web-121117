import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: null,
      password: null
    };
  }
  
  handleSubmit = (event) => {
    console.log("in dat method")
    this.setState({
      username: event.target.value,
      password: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text"  name="username" onClick={this.handleSubmit}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password"  name="password" onClick={this.handleSubmit} />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
