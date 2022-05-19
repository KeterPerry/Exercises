import './Spinner.css';
import React from 'react';


class Loading extends React.Component {
 
 state = {counter:0, data:null};
   
//  componentDidMount = () => {
//     //  this.setState({data:"bla"});

   
//  }
    
// componentDidUpdate = (prev) => {
//     if( prev.state.counter!==10)
//     setInterval(() => {                          
//     this.setState({counter: prev.state.counter+1});    
//     }, 1000);
    
// }
      
// this.state.counter<10 && this.state.data===null
    render() {
        return (   
            // if (this.state.counter<10 && this.state.data=null)
            <div className="container">
                <h3>this.state.data</h3>
               <Spinner message="Loading"/>
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

