import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// import Products from "./Products";

export default class Header extends Component {
  render() {
    return (
      <div className="Header" style={{ display: "flex" }}>
        <ul
          className="UlHeader"
          style={{ display: "flex", gap: "1rem", listStyle: "none" }}
        >
          <li>
            {" "}
            <NavLink to="/">Home Page</NavLink>
          </li>
          <li>
            {" "}
            <NavLink to="/products">Products </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
