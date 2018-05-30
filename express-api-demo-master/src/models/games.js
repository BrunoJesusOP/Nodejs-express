const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var gamesSchema   = new Schema({
    nome: String,
    nota: Number,
});

module.exports = mongoose.model('Games', gamesSchema);