// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthProvider } from './AuthContext';
import Home from './components/Home';
import AddContact from './components/AddContact';
import ViewContact from './components/ViewContact';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Assume always logged in for simplicity

  return (
    <AuthProvider>
      <Router>
        <div className="app-container">
          <Navbar isLoggedIn={isLoggedIn} /> {/* Pass isLoggedIn as a prop */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-contact" element={<AddContact />} />
            <Route path="/view-contact" element={<ViewContact />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
