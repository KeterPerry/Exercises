import ToDoList from "./components/TODoList";
import React, { Component } from "react";
import { data } from "./data";

class App extends Component {
  state = { todo: [], inputVal: "" };

  componentDidMount = () => {
    this.setState({ todo: data, inputVal: "" });
  };

  handleChange = (event) => {
    this.setState({ inputVal: event.target.value });
  };

  handleCreate = () => {
    const inputVal = this.state.inputVal;
    const newItem = { id: this.state.todo.length + 1, title: inputVal };

    this.setState((prev) => {
      return { todo: [...prev.todo, newItem], inputVal: "" }; /// instead of push
    });
  };

  handleDelete = (id) => {
    this.setState((prevState) => {
      const newToDo = this.state.todo.filter((item) => item.id !== id);
      return { todo: newToDo };
    });
  };

  insertItems = () => {
    return this.state.todo.map((item) => (
      <ToDoList
        key={item.id}
        title={item.title}
        // handleUpdate={this.handleUpdate(item.id, item.title)}
        handleDelete={this.handleDelete(item.id)}
      />
    ));
  };

  // handleUpdate = (id, title) => {
  //   this.setState((prevState) => {
  //     const AfterDelete = prevState.todo.map((obj) => {
  //       if (obj.id === id) {
  //         return { id, title };
  //       } else {
  //         return obj;
  //       }
  //     });
  //     return { arrOfObj: arrOfObjAfterDelete };
  //   });
  // };

  render() {
    return (
      <div>
        <div className="container" style={{ display: "flex" }}>
          <input
            onChange={this.handleChange}
            value={this.state.inputVal}
          ></input>
          <button onClick={this.handleCreate}>Add</button>
        </div>

        <div className="item-container">{this.insertItems()}</div>
      </div>
    );
  }
}
export default App;
