import React from "react";
import axios from "axios";
import Card from "./card";
import MappingAvatars from "./mappingAvatars";

class Avatar extends React.Component {
  state = { people: [], input: "" };

  async componentDidMount() {
    try {
      const people = await axios.get("https://randomuser.me/api/?results=20");
      console.log(people.data.results);
      const results = people.data.results;
      const arrayOfObj = results.map((avatar) => {
        return {
          id: avatar.cell,
          firstName: avatar.name.first,
          lastName: avatar.name.last,
          picture: avatar.picture.large,
        };
      });
      console.log(arrayOfObj);

      this.setState({ people: arrayOfObj });
      console.log(this.state.people);
    } catch (err) {}
  }
  handleChange(event) {
    this.setState({ input: event.target.value });
    // console.log(event.target.value); not working
  }

  render() {
    return (
      <>
        <input input={this.state.input} onChange={this.handleChange} />

        <div
          className="grid"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <MappingAvatars people={this.state.people} input={this.state.input} />
        </div>
      </>
    );
  }
}

export default Avatar;
