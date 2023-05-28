import axios from "axios";

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
const API_URL = `${API_DOMAIN}/DrinkType/`;

const getAll = async () => {
  return await axios.get(API_URL + "getall");
};


const drinkTypeService = {
  getAll,
};

export default drinkTypeService;