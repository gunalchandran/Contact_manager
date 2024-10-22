
import React, { useEffect, useState } from 'react';

const ViewContact = ({ newContact }) => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchContacts = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/contacts');
            if (!response.ok) {
                throw new Error('Failed to fetch contacts');
            }
            const data = await response.json();
            setContacts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchContacts();
    }, []);

    useEffect(() => {
        if (newContact) {
            setContacts((prevContacts) => [...prevContacts, newContact]);
        }
    }, [newContact]);

    if (loading) return <p className="text-center">Loading contacts...</p>;
    if (error) return <p className="text-red-500 text-center">Error: {error}</p>;

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">Contact List</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                    <thead>
                        <tr className="bg-blue-900 text-white">
                            <th className="py-2 px-4 border-b">USERID</th>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Phone</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Address</th>
                            <th className="py-2 px-4 border-b">Date of Join</th>
                            <th className="py-2 px-4 border-b">Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <tr key={contact.id} className="hover:bg-gray-100 transition-colors duration-200">
                                <td className="py-2 px-4 border-b">{contact.id}</td>
                                <td className="py-2 px-4 border-b">{contact.name}</td>
                                <td className="py-2 px-4 border-b">{contact.phone}</td>
                                <td className="py-2 px-4 border-b">{contact.email}</td>
                                <td className="py-2 px-4 border-b">{contact.address}</td>
                                <td className="py-2 px-4 border-b">
                                    {contact.dob ? new Date(contact.dob).toLocaleDateString() : 'N/A'}
                                </td>
                                <td className="py-2 px-4 border-b">{contact.category || 'N/A'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewContact;
