import React from 'react';
import { useDrinkType } from '../hooks/useDrinkType';
import './DrinkTypes.css';
import drinkService from '../services/drink.service';
import { useAppContext } from '../App'; // Import the AppContext

const ListDrinkType = ({ drinkTypes, onChange, currentType }) => {
  return (
    <div className="scroll-view" style={{ overflowX: 'auto' }}>
      {drinkTypes.map((category) => (
        <div key={category.id}>
          <button
            className={`item ${currentType === category.id ? 'active' : ''}`}
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
  const [type, setType] = React.useState(1); // category (danh mục nhu yếu phẩm)
  const [drinksByType, setDrinksByType] = React.useState([]);
  const { addItemToCart } = useAppContext(); // Access the addToCart function from the AppContext

  const fetchDrinksByType = async (typeName) => {
    try {
      const response = await drinkService.getDrinksByType(typeName);
      setDrinksByType(response.data);
    } catch (error) {
      console.log('Error fetching drinks by type:', error);
    }
  };

  React.useEffect(() => {
    // Fetch drinks by default type on component mount
    fetchDrinksByType(drinkTypesList[0]?.name);
  }, [drinkTypesList]);

  const handleTypeChange = (typeId) => {
    const selectedType = drinkTypesList.find((type) => type.id === typeId);
    setType(typeId);
    if (selectedType) {
      fetchDrinksByType(selectedType.name);
    }
  };

  const handleAddToCart = (drink) => {
    addItemToCart(drink); // Call the addToCart function from the AppContext
  };

  return (
    <div>
      <h1> Chọn danh mục thức uống</h1>
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
          <ul>
            {drinksByType.map((drink) => (
              <div className="drink-item">
                <h3>{drink.name}</h3>
                <p>Price: {drink.price}</p>
                <button onClick={() => handleAddToCart(drink)}>Add to Cart</button> {/* Add the "Add to Cart" button */}
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DrinkTypes;
