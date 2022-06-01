import React from "react";
class Btn extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>{this.props.name}</button>;
  }
}

export default Btn;
