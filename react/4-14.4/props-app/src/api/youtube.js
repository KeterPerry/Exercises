const KEY = AIzaSyCDA1EwGxskaf - zIMXnAdnKDqj5fW9Cbv0;
import axios from "axios";

export default axios.create({
  baseUrl: "GET https://www.googleapis.com/youtube/v3/search",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
