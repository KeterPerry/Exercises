import axios from "axios";

const peopleApi = axios.create({
  baseURL: "https://628e8845a339dfef87af96a6.mockapi.io/people",
});

export default peopleApi;
