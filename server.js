const express = require('express')
const mongoose = require('mongoose')

const app = express();
const items = require('./routes/api/items')

//Bodyparer Middleware
app.use(express.json());

//Db Config
const uri = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log('Connected...'))
.catch((err)=>console.log(err))

//Use Routes
app.use('/api/items',items)

const port=process.env.port || 5000;

app.listen(port,()=>console.log(`Server stated on port ${port}`))
