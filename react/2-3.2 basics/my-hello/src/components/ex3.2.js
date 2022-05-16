import React from "react";

function Exercise32() {
  return (
    <div>
      <Quiz/>
    </div>
  );
}

class Quiz extends React.Component {

    render() {
     
      return (<div className="quiz">
      <QuizTitle/>
      <Q1/>
      <Q2/>
      </div>
      )
    }
  }

  //////////////////////////////////////////////////////////
class QuizTitle extends React.Component {

    render() {
     
      return (<h2 className=" title">How do you like Front End?</h2>)
    }
  }

 /////////////////////////////////////////////////////////////////// 
class Q1 extends React.Component {

    render() {
     
      return (<div className="Q1Container">
      < Q1Title/>
      <Q1Input/>
      </div>
      )

    }
  }


  /////////////////////////////////////////////////////////////</div>
class Q1Title extends React.Component {

    render() {
     
      return (<h4> How much do you like Front End?</h4>)
    }
  }

  //////////////////////////////////////////////////////////////////////////////////

  class Q1Input extends React.Component {

    render() {
     
      return (<input type="range" id="volume" name="volume" min="0" max="11"></input>)
    }
  }
 
  /////////////////////////////////////////////////////////////////
  class Q2 extends React.Component {

    render() {
     
      return (
      <div className= "Q2Container">
      <Q2Title/>
      <Q2Input/>
      </div>
      )
    }
  }
 
  /////////////////////////////////////////////////////////////////
  class Q2Title extends React.Component {

    render() {
     
      return (<h4> What is your favorite front end topic?</h4>)
    }
  }
 
  ////////////////////////////////////////////////////////////////

  class Q2Input extends React.Component {

    render() {
     
      return (<input type="text"></input>)
    }
  }

  export default Exercise32
