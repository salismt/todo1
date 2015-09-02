var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Todo = new Schema({
	text: String,
	done: Boolean
});

module.exports = mongoose.model('Todo', Todo);