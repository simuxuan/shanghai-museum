import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
// import store from "@/store";

let requests = axios.create({
  // baseURL: "http://127.0.0.1:8888/api/",
  baseURL:'https://lushengtao0115.github.io',
  timeout: 5000,
});

requests.interceptors.request.use((config) => {
  nprogress.start();
  return config;
});

requests.interceptors.response.use(
  (res) => {
    nprogress.done();
    return res.data;
  },
  (err) => {
    return Promise.reject(new Error("false"));
  }
);
export default requests;
