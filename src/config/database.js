const momgoose = require('mongoose');


const connectDB = async () => {
 await momgoose.connect(
    "mongodb+srv://praveenv4440:Praveen123@node.mijpig9.mongodb.net/DevTinder"
); 
}

module.exports = connectDB;

