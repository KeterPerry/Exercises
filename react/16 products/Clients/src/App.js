import "./App.css";
import React, { Component } from "react";
// import { BrowserRouter } from "react-router-dom";
// import Header from "./components/Header";
// import HomePage from "./components/HomePage";
import Products from "./components/Products";

class App extends Component {
  render() {
    return (
      <div>
        App
        {/* <Header /> */}
        {/* <Route path="/" component={HomePage} /> */}
        <Route path="/products" component={Products} />
      </div>
    );
  }
}

export default App;
