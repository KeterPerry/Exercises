import React from 'react';


class Color extends React.Component {
    // constructor(props) {
    //     super(props);
    //     // create a ref to store the textInput DOM element
    //     this.textInput = React.createRef();
    //   }

    state = {favoriteColor: "blue", background: "white"};
   
componentDidMount = () => {        ///// invoke with render
    setTimeout(() => {
        this.setState({favoriteColor: "light blue"});
      }, 1000)}
      
 
// componentDidUpdate = () => {    /////updates the render
//     setTimeout(() => {
//         this.setState({favoriteColor: "black"});
//       }, 1000)}

 

    render() {
        return (                                      ///this a child comp of root, the change in state is passed directly instead using props 
            <div className="container">
            <h1> My favorite color is {this.state.favoriteColor}</h1>
            <div idName="my-favorite"></div>
            </div>
        )
    }
}



export default Color;








// class Component extends React.Component {

// }
// return (                                      ///this a child comp of root, the change in state is passed using props 
// <div className="container">
// <h1> My My favorite color is {props.favoriteColor}</h1>
// <div idName="my-favorite"></div>
// </div>
// )
// }


