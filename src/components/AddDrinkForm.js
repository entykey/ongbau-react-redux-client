import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import authHeader from '../services/auth-header';

const API_DOMAIN = process.env.REACT_APP_API_DOMAIN;

const AddDrinkForm = () => {
    const [drinkTypes, setDrinkTypes] = useState([]);
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        price: 0,
        imageUrl: '',
        drinkTypeId: '',
    });

    // Fetch drink types
    useEffect(() => {
        const fetchDrinkTypes = async () => {
            try {
                const response = await fetch(`${API_DOMAIN}/DrinkType/getall`);
                const data = await response.json();
                setDrinkTypes(data);
            } catch (error) {
                console.error('Error fetching drink types:', error);
            }
        };

        fetchDrinkTypes();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                `${API_DOMAIN}/Drink/add`,
                formData,
                { headers: authHeader() }
            );

            if (response.data.succeeded) {
                console.log('Drink added:', response.data);

                // Display success message using SweetAlert
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Drink successfully added!',
                });

                // Add any additional logic or state updates as needed
            } else {
                console.log('Error adding drink:', response.data.message);
                // Handle the case where the drink was not added successfully
                // You can display an error message using SweetAlert or any other approach
            }

        } catch (error) {
            if (error.response && error.response.status === 400) {
                const errorResponse = error.response.data;
                console.log('Validation errors:', errorResponse.errors.Name);

                // Display validation error message using SweetAlert
                Swal.fire({
                    icon: 'error',
                    title: 'Validation Error',
                    text: errorResponse.errors.Name[0], // Assuming there is only one validation error for the "Name" field
                });

                // You can add additional logic or state updates as needed

            }
            else if (error.response && error.response.status === 401){
                // Display generic error message using SweetAlert
                Swal.fire({
                    icon: 'error',
                    title: 'No Permission',
                    text: 'Bạn không có quyền thực hiện hành vi này!',
                });
            }
            else {
                console.error('Error adding drink:', error);

                // Display generic error message using SweetAlert
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'An error occurred while adding the drink. Please try again later.',
                });

                // You can add additional logic or state updates as needed
            }
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                    <div className="max-w-md mx-auto">
                        {/* Form title */}
                        <div className="flex items-center space-x-5">
                            <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                                i
                            </div>
                            <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                                <h2 className="leading-relaxed">Add Drink</h2>
                                <p className="text-sm text-gray-500 font-normal leading-relaxed">
                                    Điền thông tin để thêm đồ uống dựa trên danh mục thức uống
                                </p>
                            </div>
                        </div>

                        <form className="divide-y divide-gray-200" onSubmit={handleSubmit}>
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                                        Drink Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="bg-gray-50 w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors"
                                        placeholder="Enter drink name"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900">
                                        Price</label>
                                    <input
                                        type="number"
                                        id="price"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleChange}
                                        className="bg-gray-50 w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors"
                                        placeholder="Enter price in VND"
                                        min="1000"
                                        step="500"
                                        max="1000000"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="imageUrl" className="block mb-2 text-sm font-medium text-gray-900">
                                        Image URL
                                    </label>
                                    <input
                                        type="text"
                                        id="imageUrl"
                                        name="imageUrl"
                                        value={formData.imageUrl}
                                        onChange={handleChange}
                                        className="bg-gray-50 w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors"
                                        placeholder="Enter image URL"
                                        required
                                    />
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="drinkTypeId" className="block mb-2 text-sm font-medium text-gray-900">
                                        Drink Type
                                    </label>
                                    <select
                                        id="drinkTypeId"
                                        name="drinkTypeId"
                                        value={formData.drinkTypeId}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                                        required
                                    >
                                        <option value="" disabled selected>
                                            Select a drink type
                                        </option>
                                        {drinkTypes.map((drinkType) => (
                                            <option key={drinkType.id} value={drinkType.id}>
                                                {drinkType.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            <div className="text-center mt-6">
                                <button
                                    type="submit"
                                    className="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl"
                                >
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDrinkForm;
