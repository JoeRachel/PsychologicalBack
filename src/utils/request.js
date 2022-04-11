import axios from "axios";

const request = axios.create({
    // baseURL: "http://localhost:3000/api",
    baseURL: "/api",
    timeout: 1000,
    headers: { "X-Custom-Header": "foobar" },
});

export default request;