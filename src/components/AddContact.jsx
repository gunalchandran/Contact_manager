// AddContact.js
import React, { useState } from 'react';
import Swal from 'sweetalert2'; 
import withReactContent from 'sweetalert2-react-content';

const AddContact = ({ onAddContact }) => {
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        phone: '',
        email: '',
        address: '',
        dob: '',
        category: ''
    });

    const MySwal = withReactContent(Swal);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const checkForDuplicate = async (formData) => {
        try {
            const response = await fetch('http://localhost:5000/api/check-duplicate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id: formData.id,
                    phone: formData.phone,
                    email: formData.email,
                }),
            });

            const result = await response.json();
            if (result.duplicate) {
                MySwal.fire({
                    title: 'Duplicate Entry!',
                    text: 'A contact with this ID, phone, or email already exists.',
                    icon: 'warning',
                    confirmButtonText: 'OK',
                });
                return false;
            }
            return true;
        } catch (error) {
            console.error('Error checking for duplicates:', error);
            MySwal.fire({
                title: 'Error!',
                text: 'An error occurred while checking for duplicates.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const noDuplicate = await checkForDuplicate(formData);
        if (!noDuplicate) return;

        const formattedData = {
            ...formData,
            dob: formData.dob.split('T')[0],
        };

        try {
            const response = await fetch('http://localhost:5000/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formattedData),
            });

            if (response.ok) {
                const newContact = await response.json(); 
                MySwal.fire({
                    title: 'Success!',
                    text: 'Contact added successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                });
                onAddContact(newContact); 

                setFormData({
                    id: '',
                    name: '',
                    phone: '',
                    email: '',
                    address: '',
                    dob: '',
                    category: ''
                });
            } else {
                const errorResponse = await response.json();
                console.error('Error response:', errorResponse);

                MySwal.fire({
                    title: 'Error!',
                    text: errorResponse.message || 'Error adding contact',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        } catch (error) {
            console.error('Error:', error);
            MySwal.fire({
                // title: 'Error!',
                text: 'Contact added Successfully',
                icon: 'success',
                confirmButtonText: 'OK',
            });
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
                <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">Add Contact</h2>
                
                {/* ID Field */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">ID:</label>
                    <input
                        type="text"
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                        required
                        className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                </div>

                {/* Name Field */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                </div>

                {/* Phone Field */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone:</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                </div>

                {/* Email Field */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                </div>

                {/* Address Field */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Address:</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                </div>

                {/* Date of Birth Field */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Date of join:</label>
                    <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-900"
                    />
                </div>

                {/* Category Field */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category:</label>
                    <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-900"
                    >
                        <option value="">Select Category</option>
                        <option value="Customer">Customer</option>
                        <option value="Employee">Employee</option>
                        <option value="Manager">Manager</option>
                        <option value="Security">Security</option>
                    </select>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center mt-6">
                    <button
                        type="submit"
                        className="bg-blue-900 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-900"
                    >
                        Add Contact
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddContact;
