import mongoose from 'mongoose';


const connectDB = async() => {
    try{
        await mongoose.connect('mongodb+srv://Thoya:4qr6BeTg7DdjDopf@lathy.gjvlwcd.mongodb.net/Lathy?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology:true,
        })
        console.log(`Connected into LathyDB`);
    }catch(err) {
        console.log(err);
        process.exit(1);
    }
}

export default connectDB;