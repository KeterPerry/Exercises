import React, { useEffect, useState, useRef } from "react";

export default function ChangeColor() {
  const imageRef = useRef();
  const image1Ref = useRef();

  const onHoverEnter = (id) => {
    if (id === "1") imageRef.current.src = "./assets/food1black.jpg";
    else image1Ref.current.src = "./assets/foodblack.jpg";
  };
  const onHoverOut = (id) => {
    if (id === "1") imageRef.current.src = "./assets/food1.jpg";
    else image1Ref.current.src = "./assets/food.jpg";
  };

  return (
    <div>
      <img
        id="1"
        ref={imageRef}
        onMouseEnter={(e) => onHoverEnter(e.target.id)}
        onMouseLeave={(e) => onHoverOut(e.target.id)}
        src="./assets/food1.jpg"
        alt="#"
        width="300"
        height="300"
      ></img>

      <br></br>
      <img
        id="2"
        ref={image1Ref}
        onMouseEnter={(e) => onHoverEnter(e.target.id)}
        onMouseLeave={(e) => onHoverOut(e.target.id)}
        src="./assets/food.jpg"
        alt="#"
        width="300"
        height="300"
      ></img>
    </div>
  );
}
