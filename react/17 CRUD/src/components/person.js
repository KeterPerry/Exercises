import React, { Component } from "react";

export default class Person extends Component {
  state = { inputVal: " " };
  handleChange = (event) => {
    this.setState({ inputVal: event.target.value });
    console.log(this.state.inputVal);
  };

  render() {
    return (
      <div
        className="personContainer"
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid black",
          width: "150px",
        }}
      >
        <div>{this.props.name}</div>
        <img alt="#" src={this.props.img}></img>
        <button>Delete</button>
        <button
          onClick={() => {
            this.props.handleUpdate(this.props.id, this.state.inputVal);
          }}
        >
          Update
        </button>
        <input
          type="text"
          value={this.state.inputVal}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
