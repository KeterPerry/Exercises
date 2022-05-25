import React from "react";
import Btn from "./btn";
// import baseurl from "../../api/baseurl";
import CategoryBtn from "./categoryBtn";
import axios from "axios";

class ChuckNorris extends React.Component {
  state = {
    randomJoke: "",
    name1: "Get A joke",
    name2: "Categories",
    categories: [],
    displayedJokes: [],
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////
  async componentDidMount() {
    const data = await axios.get("https://api.chucknorris.io/jokes/categories");
    console.log(data.data);
    this.setState({ categories: data.data });
  }

  fetchedJoke = async (url = " ") => {
    try {
      const data = await axios.get(
        `https://api.chucknorris.io/jokes/random${url}`
      );
      console.log(data.data.value);
      return data.data.value;
    } catch (error) {}
  };

  handleRandomJoke = async () => {
    this.setState({ randomJoke: await this.fetchedJoke() });
  };

  handleSpecificCategories = async (category) => {
    this.setState({
      displayedJokes: await this.fetchedJoke(`?category= ${category}`),
    });
    console.log(this.state.displayedJokes);
  };

  handleInputPress = async (event) => {
    if (event.key === "Enter") {
      const { data } = await axios.get(
        `https://api.chucknorris.io/jokes/search?query=${event.target.value}`
      );
      console.log(data);
      this.setState({ listOfJokes: data.result });
    }
  };

  render() {
    return (
      <div>
        <input onKeyPress={this.handleInputPress} />
        <Btn onClick={this.handleRandomJoke} name={this.state.name1} />
        {this.state.randomJoke}
        <CategoryBtn
          onClick={this.handleSpecificCategories}
          categories={this.state.categories}
        />
        <h1 text={this.state.displayedJokes}></h1>
        {this.state.listOfJokes.map((joke) => (
          <p>{joke.value}</p>
        ))}
      </div>
    );
  }
}
export default ChuckNorris;
