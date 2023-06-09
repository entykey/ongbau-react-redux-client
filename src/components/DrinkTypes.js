import React from 'react';
import { useDrinkType } from '../hooks/useDrinkType';
import './DrinkTypes.css';
import drinkService from '../services/drink.service';
import DrinkCard from './DrinkCard';
import { useAppContext } from '../App'; // Import the AppContext


const ListDrinkType = ({ drinkTypes, onChange, currentType }) => {
  return (
    <div className="scroll-view" style={{ overflowX: 'auto' }}>
      {drinkTypes.map((category, index) => (
        <div key={category.id}>
          <button
            className={`item ${currentType === category.id || (!currentType && index === 0) ? 'active' : ''}`}
            onClick={() => onChange(category.id)}
          >
            <span
              className={`name ${currentType === category.id ? 'active' : ''}`}
            >
              {category.name}
            </span>
          </button>
        </div>
      ))}
    </div>
  );
};

const DrinkTypes = () => {
  const drinkTypesList = useDrinkType();
  const [type, setType] = React.useState(null); // Set initial type to null
  const [drinksByType, setDrinksByType] = React.useState([]);
  const { addItemToCart } = useAppContext();

  const fetchDrinksByType = async (typeName) => {
    try {
      const response = await drinkService.getDrinksByType(typeName);
      setDrinksByType(response.data);
    } catch (error) {
      console.log('Error fetching drinks by type:', error);
    }
  };

  React.useEffect(() => {
    if (drinkTypesList.length > 0) {
      // Fetch drinks by default type on component mount
      const firstType = drinkTypesList[0];
      setType(firstType.id);
      fetchDrinksByType(firstType.name);
    }
  }, [drinkTypesList]);

  const handleTypeChange = (typeId) => {
    const selectedType = drinkTypesList.find((type) => type.id === typeId);
    setType(typeId);
    if (selectedType) {
      fetchDrinksByType(selectedType.name);
    }
  };

  const handleAddToCart = (drink) => {
    addItemToCart(drink);
  };

  return (
    <div>
      <h1>Chọn danh mục thức uống</h1>
      {drinkTypesList.length > 0 && (
        <ListDrinkType
          drinkTypes={drinkTypesList}
          onChange={handleTypeChange}
          currentType={type}
        />
      )}
      {drinksByType.length > 0 && (
        <div>
          <h2>Đồ uống:</h2>
          <ul className='flex flex-wrap items-center lg:justify-between justify-center'>
            {drinksByType.map((drink) => (
              <DrinkCard key={drink.id} drink={drink} handleAddToCart={handleAddToCart} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};


export default DrinkTypes;
