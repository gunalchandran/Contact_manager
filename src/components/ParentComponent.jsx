// ParentComponent.jsx
import React, { useState } from 'react';
import AddContact from './AddContact';

const ParentComponent = () => {
    const [contacts, setContacts] = useState([]);

    // Function to add a new contact to the contacts list
    const handleAddContact = (newContact) => {
        setContacts([...contacts, newContact]);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold text-center my-4">Contact Management</h1>
            {/* Pass the handleAddContact function as the onAddContact prop */}
            <AddContact onAddContact={handleAddContact} />
            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-center">Contacts List</h2>
                <ul className="list-disc pl-8">
                    {contacts.map((contact, index) => (
                        <li key={index}>
                            {contact.name} - {contact.phone} - {contact.email}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ParentComponent;
