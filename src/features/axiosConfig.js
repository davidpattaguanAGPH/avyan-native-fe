import axios from "axios";

const instance = (token) =>
  axios.create({
    baseURL: `${config.API_URL}`,
    timeout: 1000,
    headers: { authorization: "Bearer " + token },
  });
