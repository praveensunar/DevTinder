const express = require('express');
const connectDB = require('./config/database.js');
const User = require('./Models/User');
const app = express();

app.post("/signup",async(req, res)=>{
  
    const user = new User({
        firstName:'Praveen',
        lastName:'sunar',
        emailId:'praveensunar@gmail.com',
        password:'sunar234', 
    })
try{
    await user.save();
    res.send('User registered successfully');
}

catch(err){
    console.log(err);
    res.status(400).send('Error Saving User');
}
});



connectDB()
.then(() => {
    console.log('MongoDB Connected...');
    app.listen(9035,()=>{
        console.log('Server is running on port 9035...');
    })
}).catch(err => {
    console.log('MongoDB Connot Connected...');
});


