import React from 'react';
import drinkTypeService from '../services/drinktype.service';

export const useDrinkType = () => {
    const [drinkTypeList, setDrinkTypeList] = React.useState([]);


    React.useEffect(() => {

        const fetchData = async () => {
            await drinkTypeService.getAll()
            .then((response) => {
                setDrinkTypeList(response.data);
            })
        }

        fetchData()

    }, []);

    return drinkTypeList;
};
