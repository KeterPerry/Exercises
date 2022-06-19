import { useState, useEffect } from "react";
// import { app } from "./express.js";

function FetchData() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      //

      const response = await fetch("/");
      const data = await response.json();
      console.log(data);
      setData(data);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="data">
      bla
      <div>{data}</div>
    </div>
  );
}
export default FetchData;

// // axios.get(
// //   "https://goweather.herokuapp.com/weather/tel-aviv"
// // );
