import axios from "axios";
import authHeader from "./auth-header";

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
const API_URL = `${API_DOMAIN}/api/DrinkType/`;

const getAll = async () => {
  return await axios.get(API_URL + "getall");
};

const add = (name) => {
  return axios.post(API_URL + "add", { name }, { headers: authHeader() });
};

const update = (id, name) => {
  return axios.put(API_URL + "update", { id, name }, { headers: authHeader() });
};

const remove = (id) => {
  return axios.delete(API_URL + `delete/${id}`, { headers: authHeader() });
};

const drinkTypeService = {
  getAll,
  add,
  update,
  remove,
};

export default drinkTypeService;