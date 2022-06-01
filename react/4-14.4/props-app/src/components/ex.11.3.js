import React from "react";

class MyForm extends React.Component {
  state = {
    value1: " ",
    value2: " ",
    input: " ",
    myFirst: "First Name",
    myLast: "Last Name",
    age: "Age",
    option1: "0-15",
    option2: "15-30",
    textArea: "",
    display: "none",
  };

  handleSubmit(event) {
    event.preventDefault();
  }

  handleInputChange = (e) => {
    this.setState({ input: e.target.value });
  };

  handleText = (e) => {
    // console.log(e.target.value);
    this.setState({ textArea: e.target.value });
  };

  handleClick = () => {
    // console.log("xxx");
    this.setState({ display: "flex" });
  };

  handleCallback = (childData) => {
    // console.log("xxxx");
    this.setState({ display: childData });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <label> {this.state.myFirst}</label>
          <input
            input={this.state.input}
            onChange={this.handleInputChange}
            style={{ width: "100px" }}
            name="first"
          ></input>
          <label> {this.state.myLast}</label>
          <input
            input={this.state.input}
            onChange={this.handleInputChange}
            style={{ width: "100px" }}
            name="last"
          ></input>
          <label> {this.state.age}</label>
          <select style={{ width: "100px" }} name="age" id="age">
            <option>{this.state.option1}</option>
            <option>{this.state.option2}</option>
          </select>
          <textarea
            textarea={this.state.textArea}
            onChange={this.handleText}
            style={{ marginTop: "10px", width: "200px" }}
            id="w3review"
            name="w3review"
            rows="4"
            cols="50"
          ></textarea>
          <button onClick={this.handleClick}>Continue</button>
        </form>
        <Review
          parentCallback={this.handleCallback}
          Display={this.state.display}
          textArea={this.state.textArea}
        />
      </div>
    );
  }
}

export default MyForm;

function Review({ textArea, parentCallback, Display }) {
  const handleClick = () => {
    parentCallback("none"); // this.setState({ display: "none" }); /////how do i move it upward?
  };
  return (
    <div className="container" style={{ display: Display }}>
      <p>{textArea}</p>
      <button onClick={handleClick}>Back</button>
      <button>Send Survey</button>
    </div>
  );
}

// onTrigger = (event) => {
//     this.props.parentCallback(event.target.myname.value);
//     event.preventDefault();
// }
