const http = require("https");

const url = "https://dog.ceo/api/breeds/image/random";

let data = " ";

const request = http.request(url, (response) => {
  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });
  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log(error);
});

request.end();
