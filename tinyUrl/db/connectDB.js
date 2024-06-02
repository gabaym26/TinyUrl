import mongoose from "mongoose";

const uri ="mongodb+srv://gabaym26:mgabay26@tinyurl.ynjlnvn.mongodb.net/";
// const uri = "mongodb://localhost:27017/<dbname>";

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('Database Connected');
  } catch (error) {
    console.error('Error connecting to database:', error);
  }
};

const database = mongoose.connection;

database.on('error', (error) => {
  console.error('Database connection error:', error);
});

export default connectDB;
