
import mongoose from 'mongoose';

const connectDB = async () => {
    const dbURI = 'mongodb://localhost:27017/contactManager'; 

    try {
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected!');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); 
    }
};

export default connectDB;
