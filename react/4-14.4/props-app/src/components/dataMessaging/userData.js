import React from "react";
import data from "./data";
import Name from "./name";
import Card from "./card";

class UserData extends React.Component {
  state = { names: [], before1990: [] };

  /////////////////////////////////////////////////////////
  componentDidMount() {
    const namesExtract = data.map((user) => {
      return user.name;
    });
    this.setState({ names: namesExtract });
    ////////////////////////////////////////////////////////////////

    const birthdaybefore1990 = data.filter((user) => {
      let year = user.birthday.split("-")[2];
      return Number(year) < 1990;
    });
    console.log(birthdaybefore1990);
    this.setState({ before1990: birthdaybefore1990 });
  }
  ///////////////////////////////////////////////////////////////

  render() {
    return (
      <div>
        <Name names={this.state.names} />
        <Card before1990={this.state.before1990} />
      </div>
    );
  }
}

export default UserData;
