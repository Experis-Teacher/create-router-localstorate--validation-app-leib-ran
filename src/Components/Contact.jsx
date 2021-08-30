import React, { Component } from "react";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "none",
      flag: false,
    };
  }

  savePhone(e) {
    if (e.target.value.match(/[0-9]{3}-[0-9]{9}/gim))
      localStorage["phone"] = e.target.value;
  }

  navigate = () => {
    this.props.history.push("/finish");
  };

  render() {
    return (
      <div>
        <h1> About</h1>
        <input
          type="text"
          placeholder="Enter your phone"
          className="phone"
          onBlur={this.savePhone}
        />
        <button onClick={this.navigate}>navigate</button>
      </div>
    );
  }
}
