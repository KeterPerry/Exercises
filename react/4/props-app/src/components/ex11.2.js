import React from 'react';


class CheckBoxParent extends React.Component {


   state={options: ["I read the term of the app", "I accept the term of the app", "I want to get the weekly news letter", "I want to get the sales offers"]}
    
//    handleonChange=()=> {
    
//    }

    
    render() {
        return (
            // this.defaultProps = {checked= {this.checked}
            //     checked: false}
            <div>
             {this.state.options.map((option, i)=>{
                 let isChecked;      
                 if (i>=2 ) {
                     isChecked =true;
                 } else{
                     isChecked =false
                 }
                 return<Checkbox checked= {isChecked} key= {i} option= {option}/>
                
              })}
            
          </div>
        )
    }

   
}

class Checkbox extends React.Component {
    handleCheck=()=>{

    }
   
    render() {
        return(
             <div>
            <input type="checkbox" defaultChecked={this.props.checked} name="controlled" ></input>
            <label> {this.props.option}</label>
            </div>
        )
        }
        }
      

export default CheckBoxParent;


  
