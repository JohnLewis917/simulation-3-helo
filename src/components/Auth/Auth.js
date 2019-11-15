import React, { Component } from "react";


class Auth extends Component {
  constructor() {
    super();
    
  }
  
  render() {
    return (
      <div>
        <div>
          <h5>Username:</h5>
          <input
            className="input-1"
            name="username"
            type="text"
            size="35"
          ></input>
          <h5>Password:</h5>
          <input
            className="input-2"
            name="password"
            type="text"
            size="35"
          ></input>
          <br></br>
          <br></br>
          <button>Login</button>
          <button>Register</button>
        </div>
      </div>
    );
  }
}

export default Auth;
