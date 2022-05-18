import React from 'react';
//! only two things render the DOM
//* props
//* state
//!DO NOT mutate the state directly
//! State is Async
class CounterUpAndDown extends React.Component {

  state = {counter: 0,
           background: "white"};
//   console.log();  /// ???

  handleChangeCounterUp = () => {
    if( this.state.counter!==10)
    this.setState({counter: this.state.counter+1,background: "green"});     ///why not ++?    prevstate is a better solution.why?
    if(this.state.counter===10)
    alert("You reached the max value!"); 
    if ( this.state.counter>0){
    this.setState({background: "green"})   
    }
    
    
};    

     
                                           
  handleChangeCounterDown = () => {
    if( this.state.counter!==-10)
    this.setState({counter: this.state.counter-1 ,background: "red"});     ///why not ++?    prevstate is a better solution.why?
     if(this.state.counter===-10)
     alert("You reached the min value!");   
    if ( this.state.counter<0)
        this.setState({background: "red"});
    } 
                                               
  render() {
   
    return (
      <div>
         
         <h1 className="box1" 
         style={{ backgroundColor: this.state.background, textAlign:"center"}}
              >{this.state.counter}</h1>
        <button
          onClick={() => {
            this.handleChangeCounterUp();     ////why callback -cause state is an ansync func
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            this.handleChangeCounterDown();     ////why callback -cause state is an ansync func
          }}
        >
          Decrement
        </button>
     
      </div>
    );
  }
}
export default  CounterUpAndDown
