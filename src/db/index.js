import mongoose from "mongoose";
// import Db_name from "../constant";


//mongodb server start command --mongod --bind_ip 127.0.0.1 --dbpath C:\data\db
const connectDb= async ()=>
{
    const mongoURI = 'mongodb://127.0.0.1:27017/resturant-food-order-website';

    await mongoose.connect(mongoURI)
      .then(() => console.log('Connected to MongoDB'))
      .catch(err => console.error('Error connecting to MongoDB:', err));
    
}
export default connectDb;