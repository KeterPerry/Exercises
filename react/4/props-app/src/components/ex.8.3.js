import React from "react";

class ChangeColor extends React.Component {
  state = {
    color: "black",
    array: ["green", "yellow", "orange", "pink", "blue"],
    count: 0,
    borderRadius: "0",
  };

  componentDidMount = () => {
    this.setState({ color: this.state.array[this.state.count] });
    console.log("bla");
  };

  componentDidUpdate = () => {
    //
    //notworking

    setTimeout(
      () =>
        this.setState({
          count: this.state.count + 1,
          color: this.state.array[this.state.count],
        }),
      500
    );

    if (this.state.count === 5) {
      setTimeout(() => this.setState({ borderRadius: "50%" }), 500);
    }
  };

  render() {
    return (
      <div className="container">
        <h1
          className="box1"
          style={{
            backgroundColor: this.state.color,
            borderRadius: this.state.borderRadius,
          }}
        ></h1>
      </div>
    );
  }
}

export default ChangeColor;

// class Component extends React.Component {

// }
// return (                                      ///this a child comp of root, the change in state is passed using props
// <div className="container">
// <h1> My My favorite color is {props.favoriteColor}</h1>
// <div idName="my-favorite"></div>
// </div>
// )
// }
