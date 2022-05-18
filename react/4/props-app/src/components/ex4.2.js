
import sky from "./sky.jpg";


function ExerciseCards() {
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

 function Card (props) {                       ///props.name   distructering= {picture, text, discription,children}
    return (
      <div className="card">
          <img src={props.picture} alt=" "></img>
      <h3>{props.text}</h3>
      <h5>{props.discription}</h5>
      <div>
         {props.children}
      </div>
      </div>

    )
 }

 function Link({link}) {                       ///props.name
    return (
        <button onClick="">{link}</button>

    )
 }



 export default ExerciseCards;