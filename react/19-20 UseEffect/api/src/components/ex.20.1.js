import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CancelRequest() {
  const [dataFetched, setData] = useState([]);
  const [isDisplay, setisDisplay] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const response = async () => {
      try {
        const { data } = await axios.get(
          "http://go-vegan.co.il/API2.0/meals.php?lat=32.0731082&lng=34.7805689&radius=5000&address=%D7%94%D7%95%D7%91%D7%A8%D7%9E%D7%9F+18%2C+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91-%D7%99%D7%A4%D7%95&version=4&uuid=563909759323956&_=1653936882606"
        );
        setData(data.categories);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    response();

    return () => {
      console.log("cleanup");
      controller.abort();
    };
  }, []);

  // useEffect(() => {
  //   const controller = new AbortController();
  //   (async () => {
  //     try {
  //         const url =
  //           "http://go-vegan.co.il/API2.0/meals.php?lat=32.0731082&lng=34.7805689&radius=5000&address=%D7%94%D7%95%D7%91%D7%A8%D7%9E%D7%9F+18%2C+%D7%AA%D7%9C+%D7%90%D7%91%D7%99%D7%91-%D7%99%D7%A4%D7%95&version=4&uuid=563909759323956&_=1653936882606";
  //         const { data } = await axios.get(url, {
  //           signal: controller.signal,
  //         });
  //         setData(prev=>{
  //           console.log('return data');
  //           return data
  //         });
  //     } catch(e){
  //         console.log(e);
  //     }
  //   })();
  //   return ()=>{
  //       console.log("cleanup");
  //       controller.abort()
  //     }
  // }, []);

  const handleClick = () => {
    setisDisplay(!isDisplay);
  };

  return (
    <div>
      <button onClick={handleClick}> Show/hide</button>
      {isDisplay && <div> {JSON.stringify(dataFetched)}</div>}
    </div>
  );
}
