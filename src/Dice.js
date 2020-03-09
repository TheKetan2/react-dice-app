import React, { Component } from "react";

class Dice extends Component {
  render() {
    return (
      <i
        className={`fas fa-dice-${this.props.face}`}
        style={{ fontSize: "10em", margin: "0.25em", color: "purple" }}
      ></i>
    );
  }
}

export default Dice;
