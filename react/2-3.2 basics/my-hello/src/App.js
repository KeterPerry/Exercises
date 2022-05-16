
import './App.css';
import React from "react";
// import Exercise1 from "./components/ex1"
// import Exercise2 from "./components/ex2"
// import Exercise3 from "./components/ex3"
import Exercise32 from "./components/ex3.2"


class App extends React.Component {

  render() {
    return (
    <div>
    {/* // {<div>{Exercise1()}</div>}
    // {<div>{Exercise2()}</div>}
    // {<div>{Exercise3()}</div>} */}
        {/* <Exercise3/> */}
        <Exercise32/>
    </div>

    )
}
}

export default App;





// class App extends React.Component {    ///returns jsx which is converted to  html
//   constructor(){
//     super();
//   }
//   render(){
//     return(
//     <title className=" "> AppleSeeds React App</title>
//     // <Header/>
//     )
//   }
// }

// class Header extends React.Component { 
//   constructor(){
//     super();
//     this.state={
//       text: "Hello world",
//   };
// }
//   ///returns
//   render() {
//     return <h1> {this.state.text} </h1>
//   }
// }