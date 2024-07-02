const fs = require('fs');
const express = require('express');
const morgan = require('morgan');
const tourRoutes = require('./routes/tourRoutes');
const userRoutes = require('./routes/usersRoutes');

const app = express();

//1. MiddleWare
app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
  console.log('Hello from the Middleware👋👋');
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use('/api/v1/tours', tourRoutes);
app.use('/api/v1/users', userRoutes);

//Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App Running on port ${PORT}...`);
});
