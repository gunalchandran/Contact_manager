// routes/employees.js
const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee'); // Make sure this path is correct

router.post('/api/employees', async (req, res) => {
    const { employeeId, employeeName, dateOfJoin, role, emailId, contactNumber } = req.body;

    try {
        const newEmployee = new Employee({
            employeeId,
            employeeName,
            dateOfJoin,
            role,
            emailId,
            contactNumber
        });

        await newEmployee.save();
        res.status(201).json({ message: 'Employee added successfully' });
    } catch (error) {
        console.error('Error adding employee:', error); // Log the error for debugging
        res.status(400).json({ message: 'Failed to add employee. Please try again.' });
    }
});

module.exports = router;
