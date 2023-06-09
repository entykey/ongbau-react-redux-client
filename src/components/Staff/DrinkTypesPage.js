import { useEffect, useState } from 'react';
import drinkTypeService from '../../services/drinktype.service';
import Swal from 'sweetalert2';

const DrinkTypesPage = () => {
  const [drinkTypes, setDrinkTypes] = useState([]);

  const fetchDrinkTypes = async () => {
    try {
      const response = await drinkTypeService.getAll();
      const data = response.data;
      setDrinkTypes(data);
    } catch (error) {
      console.error('Error fetching drink types:', error);
    }
  };

  useEffect(() => {

    fetchDrinkTypes();

  }, []);

  const handleDelete = (drinkTypeId) => {
    Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to delete this drink type?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Delete',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await drinkTypeService.remove(drinkTypeId);
          // console.log(drinkTypeId);
          setDrinkTypes((prevDrinkTypes) =>
            prevDrinkTypes.filter((drinkType) => drinkType.id !== drinkTypeId)
          );
          Swal.fire('Deleted!', 'The drink type has been deleted.', 'success');
        } catch (error) {

          if (error.response && error.response.status === 401) {
            // Display generic error message using SweetAlert
            Swal.fire({
              icon: 'error',
              title: 'No Permission',
              text: 'Bạn không có quyền thực hiện hành vi này!',
            });
          }
          else {
            console.error('Error deleting drink type:', error);

            // Display generic error message using SweetAlert
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'An error occurred while deleting the drink type.',
            });

            // You can add additional logic or state updates as needed
          }
        }
      }
    });
  };

  const handleUpdate = (drinkTypeId) => {
    const drinkType = drinkTypes.find((drinkType) => drinkType.id === drinkTypeId);

    Swal.fire({
      title: 'Update Drink Type',
      html: `
        <input type="text" id="name" class="swal2-input" value="${drinkType.name}">
      `,
      showCancelButton: true,
      confirmButtonText: 'Update',
      preConfirm: async () => {
        const name = Swal.getPopup().querySelector('#name').value;
        try {
          await drinkTypeService.update(drinkTypeId, name);
          Swal.fire('Updated!', 'The drink type has been updated.', 'success');
          fetchDrinkTypes(); // Fetch the updated list of drink types
        } catch (error) {
          if (error.response && error.response.status === 401) {
            // Display generic error message using SweetAlert
            Swal.fire({
              icon: 'error',
              title: 'No Permission',
              text: 'Bạn không có quyền thực hiện hành vi này!',
            });
          }
          else {
            console.error('Error updating drink type:', error);

            // Display generic error message using SweetAlert
            Swal.fire({
              icon: 'error',
              title: 'Error',
              text: 'An error occurred while updating the drink type.',
            });

            // You can add additional logic or state updates as needed
          }
        }
      },
    });
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Danh mục đồ uống</h1>
      <div className="grid grid-cols-2 gap-4">
        {drinkTypes.map((drinkType) => (
          <div key={drinkType.id} className="bg-white p-4 shadow rounded-md">
            <h2 className="text-lg font-medium mb-2">{drinkType.name}</h2>
            <p className="text-gray-500 mb-4">{drinkType.description}</p>
            <div className="flex justify-end">
              <button
                // "bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mr-2"
                className="inline-flex items-center px-4 py-3 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium rounded-md mr-2 rounded-xl hover:shadow inline-flex space-x-2 items-center justify-center focus:ring focus:ring-yellow-300 focus:ring-offset-2"
                onClick={() => handleUpdate(drinkType.id)}
              >
                {/* https://iconsvg.xyz/ */}
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon></svg>
                Update
              </button>
              <button
                className="inline-flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium rounded-md rounded-xl hover:shadow inline-flex space-x-2 items-center justify-center focus:ring focus:ring-red-300 focus:ring-offset-2"
                onClick={() => handleDelete(drinkType.id)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrinkTypesPage;
