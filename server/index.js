const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connected to MongoDB');
  }
); //u can use try catch and listen to port
//
// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
//
//
// app.get('/', async (req, res) => {
//   res.send('welcome to homepage');
// });
app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);

//
app.listen(5000, () => {
  console.log('Backend server is running!');
});
