// ContactUs.jsx
import React from 'react';

const ContactUs = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
                <h2 className="text-3xl font-bold text-blue-900 mb-4">Contact Us</h2>
                <p className="text-gray-700 mb-4">If you have any queries or need support, please reach out to us using the form below:</p>

                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Name:</label>
                        <input
                            type="text"
                            className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-900"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Message:</label>
                        <textarea
                            className="border rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-900"
                            rows="4"
                            required
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-900 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-900"
                        >
                            Send Message
                        </button>
                    </div>
                </form>

                <p className="text-gray-600 text-sm mt-4">We are here to help you manage your contacts efficiently!</p>
            </div>
        </div>
    );
};

export default ContactUs;
