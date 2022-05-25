import React, { Component } from "react";
import SearchBar from "./searchBar";
import youtube from "../../api/youtube";
import videoList from "./videoList";
class App1 extends Component {
  state {videos:[] }
  onFormSubmit = async input => {
   const response= await youtube.get("./", {
      params: {
        q: input,
      },
    });
    this.setState({videos: response.data.items})

  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onFormSubmit} />;
        <videoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App1;
