const express  = require('express');
const connectDB = require('./DB/Connection');
var cors = require('cors')
const app = express();
app.use(cors())
connectDB();
app.use(express.json({extended:false}));
app.use('/api/questionModel',require('./API/Question'))
const port = process.env.port || 3000;
console.log(port)
app.listen(port,()=>console.log("Server Started"))