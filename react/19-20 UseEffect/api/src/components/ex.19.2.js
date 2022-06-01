import axios from "axios";
import React, { useEffect, useState } from "react";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const response = async () => {
      try {
        const { data } = await axios.get("https://restcountries.com/v3.1/all");

        const filtered = countries.filter((element) => {
          return element.name.common.includes(input);
        });
        if (input) {
          console.log("x");
          setCountries(filtered);
        } else {
          console.log("y");
          setCountries(data);
        }
        // console.log(countries);
      } catch (err) {
        console.log(err);
      }
    };

    response();
  }, [input]);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  // const handleClick = () => {
  // const filtered = countries.filter((element) => {
  //   return element.name.common.includes(input);
  // });
  // console.log(filtered);
  // setCountries(filtered);
  // };

  const displayCountries = () => {
    return countries.map((element, index) => (
      <li key={index}>{element.name.common}</li>
    ));
  };

  return (
    <div>
      <label>Search</label>
      <input value={input} onChange={handleChange}></input>
      {/* <button onClick={handleClick}>Click</button> */}

      <ul className="countries">{displayCountries()}</ul>
    </div>
  );
}

export default Countries;
