import React, { Component } from 'react'

class SearchBar extends Component {
    state={input: ""}
    onInputChange=(event)=>{
    this.setState({input: event.target.value})
    }
    onFormSubmit=(event)=>{
        event.preventDefault();
     this.props.onFormSubmit(this.state.input);
    }
  render() {
    return (
     <div className="search-bar ui segment">
      <form onSubmit ={this.onFormSubmit} className="ui form">
          <div className="field">
              <lable> Video Search</lable>
              <input value={this.state.input}
              onChange={this.onInputChange}/>
          </div>
      </form>
      </div>
     )
  }
}
export default SearchBar;