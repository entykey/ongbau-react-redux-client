import axios from "axios";
import authHeader from "./auth-header";

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
const API_URL = `${API_DOMAIN}/api/Auth/`;

const getPublicContent = () => {
  return axios.get(API_URL + "all"); // all
};

const getUserBoard = () => {
  return axios.get(API_URL + "allusers", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const userService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

export default userService