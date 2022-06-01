import axios from "axios";
import React, { useEffect, useState } from "react";

function Algoria() {
  const [algoria, setAlgoria] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setSpinning] = useState(true);
  const [error, setError] = useState(true);

  const response = async (term) => {
    try {
      const { data } = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${term}`
      );
      setAlgoria(data.hits);

      console.log(data.hits);
    } catch (err) {
      console.log(err);
      setError("Error Message");
    }
    setSpinning(false);
  };
  useEffect(() => {
    response("hooks");
  }, []);

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleClick = () => {
    response(input);
  };

  const display = () => {
    return algoria.map((element, index) => (
      <li key={index}>{element.title}</li>
    ));
  };

  return (
    <div>
      {isLoading && <h1>spinner</h1>}

      <label>Query</label>
      <input value={input} onChange={handleChange}></input>
      <button onClick={handleClick}>Search</button>
      <ul>{display()}</ul>
    </div>
  );
}

export default Algoria;
