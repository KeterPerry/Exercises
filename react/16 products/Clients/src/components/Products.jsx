import { data } from "../../src/data";
import React, { Component } from "react";

export default class Products extends Component {
  state = { productTitles: [] };

  componentDidMount = () => {
    const titles = data.map((product) => product.title);
    this.setState({ productTitles: titles });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.productTitles.map((title) => (
            <li>
              <a href="#">{title}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
