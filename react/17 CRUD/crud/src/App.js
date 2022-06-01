import "./App.css";
import axios from "axios";
import React, { Component } from "react";
import peopleApi from "./api";
// import Person from "./person";
import Person from "./components/person";

export default class App extends Component {
  state = { peopleArr: [], inputName: "", inputImg: "" };

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  componentDidMount = async () => {
    try {
      const { data } = await peopleApi.get("/");
      this.setState({ peopleArr: data }, () => {
        // console.log(this.state.peopleArr);
      });
    } catch (e) {
      console.log(e);
    }
  };
  insertData = () => {
    const arrToRender = this.state.peopleArr.map((person) => {
      return (
        <Person
          key={person.id}
          id={person.id}
          name={person.name}
          img={person.avatar}
          handleUpdate={this.handleUpdate}
        />
      );
    });
    return arrToRender;
  };

  ////create POST
  handleCreate = async () => {
    try {
      const newPersonObj = {
        name: this.state.inputName,
        avatar: this.state.inputImg,
      };
      const objToAdd = await peopleApi.post("/", newPersonObj);
      console.log(objToAdd.data);
      this.setState((prev) => {
        return {
          peopleArr: [...prev.peopleArr, objToAdd.data],
          inputName: " ",
          inputImg: "",
        };
      });
      console.log(this.state.peopleArr);
    } catch (e) {
      console.log(e);
    }
  };

  /////update PUT
  handleUpdate = async (personID, personUpdatedName) => {
    try {
      const newPersonObj = this.state.peopleArr.find(
        (person) => person.id === personID
      );
      const updatedPerson = { ...newPersonObj, name: personUpdatedName };
      const updatedPersonInServer = await peopleApi.put(
        "/" + personID,
        updatedPerson
      );
      const newPeopleArr = this.state.peopleArr.map((person) => {
        if (person.id === personID) {
          return updatedPersonInServer.data;
        } else {
          return person;
        }
      });
      this.setState({ peopleArr: newPeopleArr });
    } catch (e) {
      console.log(e.message);
    }
  };

  render() {
    return (
      <div>
        <input
          id={"inputName"}
          onChange={this.handleChange}
          value={this.state.inputName}
          type="text"
        />
        <input
          id={"inputImg"}
          onChange={this.handleChange}
          value={this.state.inputImg}
          type="text"
        />
        <button onClick={this.handleCreate}>Add</button>
        <div
          className="container"
          style={{ display: "flex", flexWrap: "wrap" }}
        >
          {this.insertData()}
        </div>
      </div>
    );
  }
}
