import React from "react";
import { data } from "../../src/data";

export default class ProductDetails extends React.Component {
  getProduct() {
    console.log(this.props.match);
    const product = data.find(
      (product) => product.id === this.props.match.params.id * 1 ////we multiply by 1 to make a str into a num(id returns as str)
    );
    if (product) {
      return (
        <>
          {product.title}
          <div>{product.price}</div>
          <img src={product.imageUrl} />
          <button onClick={this.props.history.goBack}>Back</button>
        </>
      );
    }
  }
  render() {
    return <div>{this.getProduct()}</div>;
  }
}
//////in order to display the product itself,

// import React, { Component } from "react";
// import data from "./data";
// import { Link } from "react-router-dom";

// export default class ProductDetails extends Component {
//   constructor(props) {
//     super(props);
//     this.product = data.find((pr) => pr.title === this.props.match.params.title);
//   }

//   render() {
//     console.log(this.props);
//     return (
//       <div className="product">
//         <h3>{this.product.title}</h3>
//         <img src={this.product.imageUrl} alt={this.product.title} />
//         <div>Price:{this.product.price}</div>
//         <div>Size:{this.product.size}</div>
//         <button onClick={this.props.history.goBack}>back for cool like me</button>
//         <Link to="/products">Back for maafnim</Link>
//       </div>
//     );
//   }
// }
