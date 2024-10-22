// Home.jsx
import React from 'react';
import Image from '../assets/contact-removebg-preview.png';

const Home = () => {
    return (
        <div className="text-center mx-auto my-12 bg-white shadow-lg rounded-lg p-10 max-w-4xl">
            <h1 className="text-5xl font-bold text-[#03045E] mb-5">Welcome to the Contact Manager System</h1>
            <div className="flex justify-center mb-5">
                <img src={Image} alt="Employee Management" className="w-full max-w-md rounded-lg shadow-lg transition-transform duration-300 hover:scale-105" />
            </div>
            <p className="text-lg text-gray-700 mb-4">
                This system allows you to efficiently manage and organize employee information. You can add, view, and search employee records stored in a MongoDB database.
            </p>
            <h2 className="text-3xl font-semibold text-[#03045E] my-8">Technologies Used:</h2>
            <p className="text-lg text-gray-700 mb-4">
                This project is built using:
            </p>
            <ul className="list-disc text-left mx-auto max-w-2xl space-y-2 text-gray-700">
                <li><strong>React.js</strong> for the frontend interface.</li>
                <li><strong>Node.js</strong> with Express for the backend API.</li>
                <li><strong>MongoDB</strong> for storing employee information.</li>
                <li><strong>Tailwind CSS</strong> for styling the application.</li>
            </ul>
        </div>
    );
};

export default Home;
