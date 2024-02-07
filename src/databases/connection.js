import mongoose from 'mongoose';

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
        console.log(`Connected into LathyDB`);
    }catch(err) {
        console.log(err);
        process.exit(1);
    }
}

export default connectDB;