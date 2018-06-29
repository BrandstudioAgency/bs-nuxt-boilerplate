import axios from "axios";

export default function() {
  axios.defaults.baseURL = process.env.API_URL;
  // axios.defaults.timeout = 10000;
  axios.defaults.headers.common["If-Modified-Since"] =
    "Mon, 26 Jul 1997 05:00:00 GMT";
  axios.defaults.headers.common["Cache-Control"] = "no-cache";
  // axios.defaults.headers.common.Pragma = "no-cache";
}
