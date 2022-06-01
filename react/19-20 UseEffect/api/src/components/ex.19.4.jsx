import React, { useEffect, useState } from "react";
import axios from "axios";

function ChuckNorrisRefactor() {
  const [joke, setJoke] = useState([]);
  const [isDisplay, setisDisplay] = useState(false);
  const [categories, setCategories] = useState([]);
  const [JokesByCategory, setJokesByCategory] = useState();
  ///////////////////////////////////////////////////////////////

  const fetchData = async (endpoint) => {
    const { data } = await axios.get(
      `https://api.chucknorris.io/jokes/${endpoint}`
    );
    console.log(data);
    setJoke(data.value);
    setCategories(data);
  };
  ////////////////////////////////////////////////////////////////////////////
  const fetchData2 = async (category) => {
    const { data } = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    console.log(data.value);

    setJokesByCategory(data.value);
  };

  useEffect(() => {
    fetchData("categories");
  }, []);

  const handleClick = () => {
    fetchData("random");
    setisDisplay(true);
  };
  const handleClick2 = (element) => {
    fetchData2(element);
    // setisDisplay(true);
  };

  const InsertCategories = () => {
    return categories.map((element) => (
      <button onClick={() => handleClick2(element)} key={element}>
        {element}
      </button>
    ));
  };
  const InsertJokesByCategory = () => {
    return <h4>{JokesByCategory}</h4>;
  };

  return (
    <div>
      <div>
        <button onClick={handleClick}>joke</button>
        {isDisplay && <h4>{joke}</h4>}
      </div>
      <div>{InsertCategories()}</div>
      <div>{InsertJokesByCategory()}</div>
    </div>
  );
}

export default ChuckNorrisRefactor;
