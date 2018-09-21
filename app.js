const express = require('express');
const mongoose = require('mongoose');
const passport =require('passport');

//Passport Config
require('./config/passport')(passport);

//Load Routes
const auth = require('./routes/auth');

//Load keys
const keys = require('./config/keys');
//Map global promises
mongoose.promise = global.promise;
//Mongoose connect
mongoose.connect(keys.mongoURI,{
  useNewUrlParser:true
})
.then(()=> console.log('MongoDB Connected'))
.catch(err => console.log(err));















const app = express();

app.get('/', (req,res)=>{
  res.send('it works');
});

//use routes
app.use('/auth', auth); 

const port = process.env.PORT ||5000;

app.listen(port, ()=>{
  console.log(`server started on port ${port}`)
});