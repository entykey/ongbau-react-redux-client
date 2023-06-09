function DrinkCard({ drink, handleAddToCart }) {
    const addToCart = () => {
        handleAddToCart(drink);
      };
    
      return (
        <div tabIndex="0" className="focus:outline-none mx-2 w-72 xl:mb-0 mb-8">
          <div>
            <img
              alt={drink.imageUrl}
              src={drink.imageUrl}
              tabIndex="0"
              className="focus:outline-none w-full h-44"
            />
          </div>
          <div className="bg-white">
            <div className="flex items-center justify-between px-4 pt-4">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  tabIndex="0"
                  className="focus:outline-none"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                </svg>
              </div>
              <div className="bg-yellow-200 py-1.5 px-6 rounded-full">
                <p
                  tabIndex="0"
                  className="focus:outline-none text-xs text-yellow-700"
                >
                  Best Seller
                </p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center">
                <h2
                  tabIndex="0"
                  className="focus:outline-none text-lg font-semibold"
                >
                  {drink.name}
                </h2>
                <p
                  tabIndex="0"
                  className="focus:outline-none text-xs text-gray-600 pl-5"
                >
                  4 days ago
                </p>
              </div>
              {drink.price} vnd
              <p tabIndex="0" className="focus:outline-none text-xs text-gray-600 mt-2">
                Some description
              </p>
              <div className="flex mt-4">
                <div>
                  <p
                    tabIndex="0"
                    className="focus:outline-none text-xs text-gray-600 px-2 bg-gray-200 py-1"
                  >
                    {drink.drinkTypeName}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between py-4">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-1.5 font-medium text-white bg-yellow-300 hover:bg-yellow-500 rounded-xl border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center focus:ring focus:ring-yellow-300 focus:ring-offset-2"
                  onClick={addToCart}
                >
                  Thêm vào giỏ
                </button>
              </div>
            </div>
          </div>
        </div>
      );
  }
  
  export default DrinkCard;  