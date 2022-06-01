import React, { Component } from 'react'



class Focus extends Component {

  constructor(props) {
    super(props)
    this.myRef=React.createRef();
  }
  componentDidMount(){
      // this.input1.focus()   ///selector
      this.myRef.current.focus()
    }
    render() {
    return (
      <div>
          <input ref={this.myRef}
          // ref={(input) => {
          //     this.input1 =  input;
           defaultValue= "input1"/>
          <input default value= "input2"
          ref= {(input)=>{
              this.input2 = input}}/>
      </div>
    )
  }
}


export default Focus;
