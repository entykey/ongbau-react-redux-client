// format the price currency to VND
const formatCurrency = (value) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
};


// main
function DrinkCard({ drink, handleAddToCart }) {
  const addToCart = () => {
    handleAddToCart(drink);
  };

  return (
    <div class="w-72 mb-4 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <img src={drink.imageUrl} />
      <div class="px-4 py-3 w-72">
        <span class="text-gray-400 mr-3 text-xs">
          Danh mục: {drink.drinkTypeName}
        </span>
        <p class="text-lg font-bold text-black truncate block capitalize">
          {drink.name}
        </p>
        <div class="flex items-center">
          <p class="text-lg font-semibold text-black cursor-auto my-3">
            {formatCurrency(drink.price)} VND
          </p>
          <del>
            <p class="text-sm text-gray-600 cursor-auto ml-2">
              {formatCurrency(drink.price + 1000)} VND
            </p>
          </del>
          <button onClick={() => addToCart()} class="ml-auto items-center px-2 py-2 bg-purple-200 font-medium hover:bg-purple-400 rounded-xl border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center focus:ring focus:ring-yellow-300 focus:ring-offset-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default DrinkCard;  