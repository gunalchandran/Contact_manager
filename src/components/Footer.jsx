
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white py-10 mt-20">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getDate()} Your Company Name. All rights reserved.</p>
                <div className="mt-2">
                    <a href="/contact-us" className="text-white hover:text-gray-300 mx-2">Contact Us</a> | 
                    <a href="/privacy-policy" className="text-white hover:text-gray-300 mx-2">Privacy Policy</a> | 
                    <a href="/terms-of-service" className="text-white hover:text-gray-300 mx-2">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
