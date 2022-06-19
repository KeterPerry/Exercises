import express from "express";
import axios from "axios";

const app = express(); // ← server
app.use(express.json());
app.use(express.urlencoded());

const dataGot = [];
////////////////////////////////////////////////////
const PORT = process.env.PORT || 3002;
app.listen(3002, () => {
  console.log("listening on port" + PORT);
});

const fetch = async () => {
  const data = await axios.get(
    "https://goweather.herokuapp.com/weather/tel-aviv"
  );
  const dataGot = data;
};

app.get("/", (req, res) => {
  console.log("get request");
  try {
    res.status(200);
    res.send("blamnbjhgh");
  } catch (e) {
    res.status(e.status).send(e.message);
  }
});
