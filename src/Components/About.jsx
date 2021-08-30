import React, { Component } from "react";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "none",
    };
    this.alert = this.alert.bind(this);
  }

  saveName(e) {
    if (e.target.value.match(/[a-z]{3,5}/gim)) {
      localStorage.setItem("name", e.target.value);
      return true;
    }
    return false;
  }

  navigate = () => {
    this.props.history.push("/contact");
  };

  alert() {}

  render() {
    return (
      <div>
        <h1> About</h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="name"
          style={{
            position: "relative",
          }}
          onBlur={this.saveName}
        />
        <button
          onClick={() => {
            if (this.saveName()) {
              this.navigate();
            } else {
              this.setState({ show: "" });
            }
          }}
        >
          navigate
        </button>
        <div
          style={{
            display: this.state.show,
          }}
        >
          Please write only letters not numbers
        </div>
      </div>
    );
  }
}
