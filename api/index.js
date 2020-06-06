const express = require('express');

const api = express();

api.use(express.urlencoded({ extended: true }));
api.use(express.json({ extended: true }));

api.get('/', (req, res) => res.json({message: 'Que pdo'}));

api.use(require('../routes/UsersRoutes'));

module.exports = api;