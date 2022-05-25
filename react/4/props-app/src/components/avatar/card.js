import React from "react";

function Card({ people }) {
  return people.map((person, idx) => (
    <div
      key={person.cell}
      className="container"
      style={{ border: "1px solid black" }}
    >
      <h5>{person.firstName}</h5>
      <h5>{person.lastName}</h5>
      <img alt="#" src={person.picture}></img>
    </div>
  ));
}

export default Card;
