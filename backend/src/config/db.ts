import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGODB_URL;
    if (!mongoURI) {
      throw new Error('MongoDB URI is not defined in environment variables');
    }

    await mongoose.connect(mongoURI);
    console.log('MongoDB connected');
  } catch (err: unknown) {
    if (err instanceof Error) {
      console.error('Failed to connect to MongoDB: ', err.message);
      
    } else {
      console.error('Unknown error occurred');
    }
  }
};

export default connectDB;
