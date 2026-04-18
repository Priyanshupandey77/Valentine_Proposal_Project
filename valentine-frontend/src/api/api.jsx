import axios from "axios";

const API = axios.create({
  baseURL: "https://valentine-proposal-project.onrender.com/api/users",
});


export default API;