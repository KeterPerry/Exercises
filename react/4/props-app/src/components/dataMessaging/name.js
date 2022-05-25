import React from "react";
class Name extends React.Component {
  render() {
    return (
      <div>
        {this.props.names.map((name, idx) => (
          <div key={name + idx}>{name}</div>
        ))}
      </div>
    );
  }
}
export default Name;
