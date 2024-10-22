// server.js
import express from 'express';
import cors from 'cors';
import connectDB from './db.js'; 
import mongoose from 'mongoose';

const app = express();


app.use(cors());
app.use(express.json()); 


connectDB();


const contactSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true }, 
    address: { type: String },
    dob: { type: Date },
    category: { type: String },
});

const Contact = mongoose.model('Contact', contactSchema, 'contacts');


app.post('/api/contacts', async (req, res) => {
    const { id, name, phone, email, address, dob, category } = req.body;

    try {
        const newContact = new Contact({
            id,
            name,
            phone,
            email,
            address,
            dob,
            category,
        });
        
        await newContact.save();
        res.status(201).json({ message: 'Contact added successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to add contact. Please try again.', error: error.message });
    }
});


app.post('/api/check-duplicate', async (req, res) => {
    const { id, phone, email } = req.body;

    try {
        const duplicateId = await Contact.findOne({ id });
        const duplicatePhone = await Contact.findOne({ phone });
        const duplicateEmail = await Contact.findOne({ email });

        if (duplicateId || duplicatePhone || duplicateEmail) {  
            return res.json({ duplicate: true });
        }

        return res.json({ duplicate: false });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Error checking for duplicates.', error: error.message });
    }
});


app.get('/api/contacts', async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch contacts.', error: error.message });
    }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
