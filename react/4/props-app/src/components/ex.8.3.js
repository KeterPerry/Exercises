import React from 'react';


class ChangeColor extends React.Component {
    

    state = {color: "black", array: ["green", "yellow", "orange", "pink","blue"]  , count: 0, borderRadius:"0"};
   

componentDidMount=()=> {
    this.setState({color: this.state.array[this.state.count]});
    
}
  
  
componentDidUpdate = () => {
    if (this.state.count===5)
     //notworking
   { setTimeout(()=>this.setState({count:this.state.count +1 ,color: this.state.array[this.state.count]}),500)
    console.log (this.state.count);}
    // else if (this.state.count===5)
    //  this.setState({borderRadius: "150"}) 

}
    
    // if (this.state.count ===4) this.setState({count: 0})
    //  this.setState({count: this.state.count+1})
    //  console.log("bla");
    //  this.setState({color: this.state.array[this.state.count]});
    //  this.setState({borderRadius: "50%"});

    // for(let i=0; i<array.length; i++){
    //     setTimeout(() => {this.setState({color: array[i], count: this.state.count+1});
    // }, "500")}  }
    
    

    render(){
             return (                        
            <div className="container">
            <h1 className="box1" style={{backgroundColor: this.state.color, borderRadius: this.state.borderRadius}}></h1>
            </div> 
             )
    }
}



export default ChangeColor;



// class Component extends React.Component {

// }
// return (                                      ///this a child comp of root, the change in state is passed using props 
// <div className="container">
// <h1> My My favorite color is {props.favoriteColor}</h1>
// <div idName="my-favorite"></div>
// </div>
// )
// }


