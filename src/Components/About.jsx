import React, { Component } from "react";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "none",
    };
    this.alert = this.alert.bind(this);

    this.input = React.createRef()
    this.button = React.createRef()
  }

  saveName = (e) => {
    // console.log(e.target.value.match(/[a-z]{2,5}/gi));
    const myInput = this.input.current
    // const button = this.button.current
    if (myInput.value.match(/[a-z]{2,5}/gi)) {
      localStorage.setItem("name", e.target.value);
      // button.click()
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
          ref={this.input}
          type="text"
          placeholder="Enter your name"
          className="name"
          style={{
            position: "relative",
          }}
          onBlur={this.saveName}
        />
        <button
          ref={this.button}
          onClick={(e) => {
            if (this.saveName(e)) {
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
