import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://localhost:7000/api/UserProfile/";

const getPublicContent = () => {
  return axios.get(API_URL + "all"); // all
};

const getUserBoard = () => {
  return axios.get(API_URL + "UsersListAdmin", { headers: authHeader() });
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