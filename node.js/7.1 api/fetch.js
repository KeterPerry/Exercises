const axios = require("axios");
const got = require("got");

// const fetchAxios = async (url) => {
//   try {
//     const { data } = await axios.get(url);
//     console.log(data.message);
//   } catch (e) {
//     console.log("error");
//   }
// };

const fetchGot = async (url) => {
  const result = await get(
    "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15 ",
    {
      responseType: "json",
    }
  )
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = { fetchAxios, fetchGot };

// got
