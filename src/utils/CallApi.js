import axios from "axios";
import { BASE_URL } from "./constants";

const config = {
  headers: {
    "Content-Type": "appliction/json",
    Accept: "appliction/json",
  },
};

export const callAPI = async (resource) => {
  const { data } = await axios.get(`${BASE_URL}/${resource}`, config);
  return data;
};
