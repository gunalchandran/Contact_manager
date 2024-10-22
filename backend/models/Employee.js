const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employeeId: {
        type: String,
        required: true,
        unique: true,
    },
    employeeName: {
        type: String,
        required: true,
    },
    dateOfJoining: { // Adjusted field name for clarity
        type: Date,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
    emailId: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/ // Basic email validation
    },
    contactNumber: {
        type: String,
        required: true,
        match: /^\d{10}$/, // Example: Ensuring it's a 10-digit number
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Employee', employeeSchema);
