import React from "react";

export default class TODoList extends React.Component {
  state = { title: "" };

  handleOnChange = ({ target }) => {
    this.setState({ title: target.value });
  };

  render() {
    return (
      <div
        className="item"
        style={{ display: "flex", flexDirection: "coloumn" }}
      >
        <input
          type="text"
          onChange={this.handleOnChange}
          value={this.state.title}
        />

        <button
          type="button"
          onClick={() => this.props.handleDelete(this.props.id)}
        >
          Delete
        </button>
        <div> {this.props.title}</div>
      </div>
    );
  }
}
