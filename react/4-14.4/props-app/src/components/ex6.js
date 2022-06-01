
import React from 'react';
import sky from "./sky.jpg";


class CardsClass extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
    return (
      <div className="container">
          <Card
          picture={sky}
          text= "A random title"
          discription= "discription">
              <Link link="Share"/>
              <Link link="Explore"/>
          </Card>
          <Card
          picture={sky}
          text= "A random title"
          discription= "discription">
              <Link link="Share"/>
              <Link link="Explore"/>
          </Card>
          <Card
          picture={sky}
          text= "A random title"
          discription= "discription">
              <Link link="Share"/>
              <Link link="Explore"/>
          </Card>
      </div>
    )
    }
    
 }

 class Card extends React.Component { 
    constructor(props) {
        super(props);
    }
     render(){                       ///props.name   distructering= {picture, text, discription,children}
    return (
      <div className="card">
          <img src={this.props.picture} alt=" "></img>
      <h3>{this.props.text}</h3>
      <h5>{this.props.discription}</h5>
      <div>
         {this.props.children}
      </div>
      </div>
    )
 }

 }

 class Link extends React.Component{
    constructor(props) {
        super(props);
    }
     render() {                       ///props.name
    return (
        <button onClick="">{this.props.link}</button>

    )
 }
}



 export default CardsClass;