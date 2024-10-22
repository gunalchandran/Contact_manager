// Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn }) => {
  return (
    <nav className="bg-blue-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">My Contacts</h1>
        <ul className="list-none flex gap-6 m-0 p-0">
          <li>
            <Link
              to="/"
              className="text-white font-semibold p-2 transition duration-300 hover:bg-blue-700 rounded-lg"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/add-contact"
              className="text-white font-semibold p-2 transition duration-300 hover:bg-blue-700 rounded-lg"
            >
              Add Contact
            </Link>
          </li>
          <li>
            <Link
              to="/view-contact"
              className="text-white font-semibold p-2 transition duration-300 hover:bg-blue-700 rounded-lg"
            >
              View Contact
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className="text-white font-semibold p-2 transition duration-300 hover:bg-blue-700 rounded-lg"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
