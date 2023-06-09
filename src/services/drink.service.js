import axios from "axios";

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;
const API_URL = `${API_DOMAIN}/api/Drink/`;

const getAll = async () => {
    return await axios.get(API_URL + "getall");
};

const getDrinksByType = async (typeName) => {
    return await axios.get(API_URL + "getdrinksbytype", {
        params: {
            typeName: typeName
        }
    });
};


const drinkService = {
    getAll,
    getDrinksByType
};

export default drinkService;