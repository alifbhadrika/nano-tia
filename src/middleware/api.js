import axios from "axios";

export const apiUrl = "https://www.techinasia.com/wp-json/techinasia/2.0";

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
