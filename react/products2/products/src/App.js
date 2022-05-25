import "./App.css";
import React, { Component } from "react";
// import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ProductDetails from "./components/ProductDetails";
import { Route, Switch } from "react-router-dom";
import Products from "./components/Products";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/products" component={Products} />
          <Route exact path="/product/:id" component={ProductDetails} />
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
