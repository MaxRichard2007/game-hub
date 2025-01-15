import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4f3b5d4163544510bffbefb4ee8d2eda",
  },
});
