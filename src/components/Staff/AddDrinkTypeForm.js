import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
//import axios from 'axios';
import Swal from 'sweetalert2';
import drinkTypeService from '../../services/drinktype.service';


const AddDrinkTypeForm = () => {
    const [drinkTypes, setDrinkTypes] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
    });

    // Fetch drink types
    useEffect(() => {
        const fetchDrinkTypes = async () => {
            try {
                const response = await drinkTypeService.getAll();
                const data = response.data;
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
            const response = await drinkTypeService.add(formData.name);

            if (response.data.succeeded) {
                console.log('Drink type added:', response.data);

                // Display success message using SweetAlert
                Swal.fire({
                    icon: 'success',
                    title: 'Success',
                    text: 'Drink type successfully added!',
                });

                // Reset form data
                setFormData({ name: '' });

                // Add any additional logic or state updates as needed
            } else {
                console.log('Error adding drink type:', response.data.message);
                // Handle the case where the drink type was not added successfully
                // You can display an error message using SweetAlert or any other approach
            }
        } catch (error) {
            console.error('Error adding drink type:', error);

            // Display generic error message using SweetAlert
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while adding the drink type. Please try again later.',
            });

            // You can add additional logic or state updates as needed
        }
    };

    return (
        <form className="divide-y divide-gray-200" onSubmit={handleSubmit}>
            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="flex flex-col">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
                        Tên danh mục (Drink Type Name)
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-gray-50 w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors"
                        placeholder="Enter drink type name"
                        required
                    />
                </div>
            </div>

            <div className="text-center mt-6">
                <button type="submit" className="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl">
                    Add
                </button>
            </div>
            {/* Button to navigate to DrinkTypesPage */}
            <div className="text-center mt-6">
                <button type="submit" className="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl">
                    <Link to="/staff/drinktypespage" className="nav-link" style={{color: "#fff"}}>
                        Quản lý danh mục
                    </Link>
                </button>

            </div>
        </form>
    );
};

export default AddDrinkTypeForm;
