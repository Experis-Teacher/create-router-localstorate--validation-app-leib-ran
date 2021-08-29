import React, { Component } from "react";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  saveName(e) {
    if (e.target.value.match(/[a-z]{3,5}/gim)) {
      localStorage.setItem("name", e.target.value);
    }
  }

  navigate = () => {
    this.props.history.push("/contact");
  };

  render() {
    return (
      <div>
        <h1> About</h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="name"
          onBlur={this.saveName}
        />
        <button onClick={this.navigate}>navigate</button>
      </div>
    );
  }
}
