import React from 'react';
//! only two things render the DOM
//* props
//* state
//!DO NOT mutate the state directly
//! State is Async
class Counter extends React.Component {

  state = {counter: 0};
//   console.log();  /// ???

  handleChangeCounter = () => {
    this.setState({counter: this.state.counter+1 });     ///why not ++?    prevstate is a better solution.why?
  };                                                
  render() {
   
    return (
      <div>
         
         <h1> {this.state.counter}</h1>
        <button
          onClick={() => {
            this.handleChangeCounter();     ////why callback -cause state is an ansync func
          }}
        >
          Increment
        </button>
     
      </div>
    );
  }
}
export default Counter;
