import './Spinner.css';
import React from 'react';


class Loading extends React.Component {
 
 state = {counter:0, data:null};
   
 componentDidMount = () => {
   setTimeout(()=>this.setState({count:this.state.count +1}),2000)
   console.log (this.state.counter);  
 }

    
componentDidUpdate = (prev) => {
console.log(this.state.counter);
if( this.state.counter<10)
{
    // setTimeout(()=>this.setState({counter:10}),4000)
    setTimeout(this.setState({counter: this.state.counter+1}),2000);
    // setInterval(this.setState((prevState)=>{return {count:prevState.count +1}},2000));
    // this.setState((prevState) => {
    //     return {
    //       giveSpinner: this.state.spinnerArr[this.state.counter],
    //     };
    //   });
  
}
}
    render() {
        if (this.state.counter<10){
        return (     
            <div className="container" style={{display:"flex", gap:50, justifyContent:"center", alignItems: "center"}}>
               <Spinner message="Loading"/>
               <Spinner message="Loading"/>
               <Spinner message="Loading"/>
           </div> 
        )
        }
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
// Spinner.defaultProps={
//     message: 'Loading...'
// }

// this.state.counter<10 && this.state.data===null