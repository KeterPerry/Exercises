import logo from './logo.svg';
import './App.css';
import React from "react";



class App extends React.Component {    ///returns jsx which is converted to  html
  constructor(){
    super();
  }
  render(){
    return(
    // <div className=" " data-isopen=" ">  Hello World from app</div>
    
    <Header/>
    )
  }
}

class Header extends React.Component { 
  constructor(){
    super();
    this.state={
      text: "Hello world",
  };
}
  ///returns
  render() {
    return <h1> {this.state.text} </h1>
  }
}


export default App;
