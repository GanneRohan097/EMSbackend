const employeeRoutes = require('./Routes/employeeRoutes');
const express = require('express')
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express();
app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI)
 .then(()=>{
    console.log("Mongodb connected...")
 })
 .catch((err)=>{
    console.log("Failed to connect")
 })
app.get('/',(req,res)=>{
   res.send("EMS backend running")
});

app.use('/employees',employeeRoutes);


app.listen(5000,()=>{
    console.log("Server running on port 5000");
})