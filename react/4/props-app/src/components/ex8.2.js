import React from 'react';


class Slides extends React.Component {
    // constructor(props) {
    //     super(props);
    // create a ref to store the textInput DOM element
      
    state = {display: false};

componentDidMount=()=> {
    setTimeout(() => {
        this.setState({display: true})
        console.log("blar");
      }, 1000)
    }

    //   setTimeout(() => {
    //     this.setState({display:false});
    //     console.log("bla");
    //   }, "4000")} 
    
componentDidUpdate = () => {             ///////     update needs a stop conditional, otherwise,
    if (this.state.display===true) {
    setTimeout(() => {
        this.setState({display:false});
        console.log("bla");
      }, 3000)
    }
}


    render(){
              if (this.state.display===true){
             return (                        
            <div className="container">
            <h1 className="box1" ></h1>
            <h1 className="box2" ></h1>
            <h1 className="box3" ></h1>
            </div> 
             )
              }
    }
}




export default Slides



// class Component extends React.Component {

// }
// return (                                      ///this a child comp of root, the change in state is passed using props 
// <div className="container">
// <h1> My My favorite color is {props.favoriteColor}</h1>
// <div idName="my-favorite"></div>
// </div>
// )
// }


