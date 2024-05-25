import axios from "axios";
import { baseURL } from "../Constant/baseURL";

export const getJokes = async () => {
  try {
    const url = baseURL + "search?limit=10";
    const res = await axios({
      headers: { Accept: "application/json" },
      method: "GET",
      url,
    });
    return res;
  } catch (err) {
    console.log(err);
  }
};
