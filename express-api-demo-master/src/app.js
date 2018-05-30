const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()

mongoose.connect('mongodb://root:root@ds161931.mlab.com:61931/express-api-demo/games')

// configura app para usar bodyParser()
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/games', require('./routes/gamesRoute'))

module.exports = app