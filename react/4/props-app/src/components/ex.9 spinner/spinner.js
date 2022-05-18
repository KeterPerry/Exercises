import './spinner.css';
import React from 'react';


class Loading extends React.Component {
 
 state = {time:" "};
   
 componentDidMount = () => {
    setInterval(() => {
        this.setState({time: new Date().toLocaleTimeString()})
    }, 1000)
 }
    
// componentDidUpdate = () => {
//     if( this.state.counter!==10)
//     this.setState({counter: this.state.counter+1});     
//     if(this.state.counter===10)
//     alert("You reached the max value!");    
// }
      
 
// componentDidUpdate = () => {
//     setTimeout(() => {
//         this.setState({favoriteColor: "blue"});
//       }, "1000")}

 

    render() {
        return (    
            <div className="container">
                <h3>This time is: {this.state.time}</h3>
                <h1>{this.state.counter}</h1>                                     
                <spinner message="Loading"/>
           </div> 
        )
    }
}

export default Loading;

const Spinner =(props) =>{
    return (
<div className="container">
<div className="loader">{props.message}</div>
</div>
    );
};
Spinner.defaultProps={
    message: 'Loading...'
}

