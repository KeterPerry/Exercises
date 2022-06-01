import axios from "axios";
import React, { useEffect, useState } from "react";

function StarWars() {
  const [starWars, setStarWars] = useState([]);

  useEffect(() => {
    const response = async () => {
      try {
        const { data } = await axios.get("https://swapi.dev/api/films/1");
        setStarWars(data);
        console.log(starWars);
      } catch (err) {
        console.log(err);
      }
    };

    response();
  });

  return (
    <div>
      <div>Movie Title: {starWars.title}</div>;
      <div>Movie Director: {starWars.director} </div>;
    </div>
  );
}

export default StarWars;
