import React from 'react';


class MyForm extends React.Component {


     state={value1:" ",value2:" ",myFirst:"First Name", myLast:"Last Name",age: "Age", option1:"0-15", option2:"15-30"}
  
 


    //  this.handleInputChange = this.handleInputChange.bind(this);

   
        handleSubmit(event) {
            event.preventDefault();
          }
    

    handleInputChange =(e)=> {
        console.log(e.target);
    //   const target = event.target;
    //   const value = target.type === 'checkbox' ? target.checked : target.value;
    //   const name = target.name;
    //   this.setState({[name]: value });
      
    }




    render() {
        return (
          
            <div>
          <form onSubmit={ this.handleSubmit} style={{display: "flex", flexDirection: 'column',alignItems: 'center'}}>
              
              <label> {this.state.myFirst}</label>
              <input onChange={this.handleInputChange} style= {{width: "100px" }}   name="first"></input>
              <label> {this.state.myLast}</label>
              <input  style= {{width: "100px" }}  name="last"></input>
              <label> {this.state.age}</label>
               <select onChange={this.handleInputChange} style= {{width: "100px" }} name="age" id="age">
                   
                    <option >{this.state.option1}</option>
                     <option>{this.state.option2}</option>     
                </select> 
              <textarea style= {{marginTop: "10px",width: "200px" }}id="w3review" name="w3review" rows="4" cols="50"></textarea> 
              <button>Continue</button>
         
          </form>
            
          </div>
        )
    }   
}








 // handleInput1= ({target})=>{
    //     this.setState({input1:" target"})
    // }
    // handleInput1= ({target})=>{
    //     this.setState({Input2:" target"})
    // }




                        
    







      

export default MyForm;

  
