/* eslint-disable no-console */
// process.env.MONGO_URI -> asi se accede a variables de entorno   .env es para crear variables de entorno

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Database connected'))
  .catch(() => console.log('Cagadal'));
