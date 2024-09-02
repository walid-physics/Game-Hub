import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "0cb09ec4de074b10b31a770cb1a4ac1e",
  },
});