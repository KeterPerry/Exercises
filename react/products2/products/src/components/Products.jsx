import { data } from "../../src/data";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Products extends Component {
  state = { productTitles: [], data: [] };

  componentDidMount = () => {
    const titles = data.map((product) => product.title);

    this.setState({ productTitles: titles, data });
    console.log(data);
  };

  render() {
    return (
      <div>
        <ul
          className="productsContainer"
          style={{ display: "flex", gap: "1rem", listStyle: "none" }}
        >
          {this.state.data.map((product) => (
            <li key={product.id}>
              <NavLink to={`product/${product.id}`}>{product.title}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

/////Navlink to === a href only it navigates you to the same page (where you dont need refresh)to a certain adress(e.g products/1)
////in order for that to happen you need to use 'Route' to the the specific component you want to display. in that case (productDetails comp)
