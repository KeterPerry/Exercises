import React, { Component } from 'react'

class Copy extends Component {
constructor(props)
super(props)
this.myRef=React.createRef()
    // state= {defaultValue:"Example copy for the textarea", name:"Copy To Clipboard" }
  

    copyToClipboard=()=>{
       this.myRef.current.select()  //selects text in blue
      //  document.execCommand("copy") deprecated dont use!!
       navigator.clipboard.writeText(this.myRef.current.value)
    }


  
    
    render() {
    return (
      <div>
         <textarea ref={this.myRef}/>
         <button onClick={this.copyToClipboard()}>Copy</button>
      </div>
    )
  }
}



function Textarea1({defaultValue}) {

  return (
      <>
       <textarea ref={} >{defaultValue} </textarea>
      </>
  )
}
function ButtonCopy({onClick, name}) {

  return (
      <>
       <button onClick={()=>{onClick()}}>{name}</button>
      </>
  )
}



export default Copy;