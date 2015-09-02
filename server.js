// Base module setup ============
var express 		= require('express'),			
	app				= express(),					// create our app w/ express
	mongoose 		= require('mongoose'),			// mongoose for mongoDB
	morgan 			= require('morgan'),			// log request to the console (express4)
	bodyParser 		= require('body-parser'),		// pull information from HTML POST
	methodOverride 	= require('method-override'),	// simulate DELETE and PUT (express4)
	port			= process.env.PORT || 8080;

// Configuration ================

var db = require('./config/database');
mongoose.connect(db.url);

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: "application/vnd.api"}));
app.use(methodOverride());

// Routes =======================
// api ------
// get all todos
require('./app/routes.js')(app);

// Start the Server =============
app.listen(port);
console.log('App listening on ' + port);
