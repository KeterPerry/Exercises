import React from 'react';
//! only two things render the DOM
//* props
//* state
//!DO NOT mutate the state directly
//! State is Async
class HideAndSeek extends React.Component {
  //! start first
  // constructor(props) {
  //   super(props);
  //   this.text = 'amigos';
  //   this.state = { text: 'amigos', text2: 'friends' };
  // }
  state = {backgColor: 'yellow'};

  handleChangeColor = () => {
    this.setState({backgColor: "white" });        
    // this.state = { text2: str };
  };
  render() {
    // console.log(this.state);
    return (
      <div>
         
         <h1 className="box"
          style={{ backgroundColor: this.state.backgColor}}></h1>
        <button
          onClick={() => {
            this.handleChangeColor();     ////why callback again?
          }}
        >
          Show/Hide
        </button>
      </div>
    );
  }
}
export default HideAndSeek;