import React from "react";

class CategoryBtn extends React.Component {
  render() {
    return (
      <div>
        {this.props.categories.map((category) => (
          <button onClick={this.props.onClick} key={category}>
            {category}
          </button>
        ))}
      </div>
    );
  }
}

export default CategoryBtn;
