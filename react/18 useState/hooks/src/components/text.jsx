import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";

export default function Text({ text, maxLength, handleClick }) {
  return (
    <>
      <a href="#" onClick={() => handleClick(5)}>
        {" "}
        Read More
      </a>
      <a href="#" onClick={() => handleClick(1)}>
        {" "}
        Read less
      </a>
    </>
  );
}
