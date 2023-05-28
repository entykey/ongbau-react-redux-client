import React from 'react';
import drinkService from '../services/drink.service';

export const useDrink = (typeName) => {
    const [drinkList, setDrinkList] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            await drinkService.getDrinksByType(typeName)
                .then((response) => {
                    setDrinkList(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        fetchData();
    }, [typeName]);

    return drinkList;
};
