const express = require('express');

const app = express();

app.use("/hi",(req, res) => {
    res.send("Hello, world!");
    })

    app.use("/service",(req, res) => {
        res.send("servicet!");
        })
app.listen(9035,()=>{
    console.log('Server is running on port 9035...');
})
