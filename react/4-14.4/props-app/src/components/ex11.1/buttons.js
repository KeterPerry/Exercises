import React from 'react';
import "./buttons.css";

class ButtonParent extends React.Component {


    state = {color:["blue","red","yellow"], selectedColor :null}
   

    displayColor=(color)=>{
    this.setState({selectedColor:color});
    }
    

    
    render() {
        return (
            <div>
            
              <h1>The selcted color is: {this.state.selectedColor}</h1>
              {this.state.color.map((Color, i)=>{
                 return<CustomButton handledisplayColorFather={this.displayColor} key={i} myColor= {Color}/>
              })}

            
          </div>
        )
    }

   
}

class CustomButton extends React.Component {
    
    handledisplayColor=()=>{
        console.log(this.props.myColor)
        this.props.handledisplayColorFather(this.props.myColor);
    }
    render() {
        return(
        <button onClick={this.handledisplayColor} style={{backgroundColor:this.props.myColor}}>{this.props.myColor}</button>
        )
    }


}
export default ButtonParent;


  
