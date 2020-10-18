const express = require('express');
const app = express();
const exphbs = require('express-handlebars'); 
const path = require('path');
const mongoose = require('mongoose');
//require('dotenv/config');


const PORT = process.env.PORT || 5000;

// handlebars middlewares
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//set handlebars routes
app.get('/', (req, res) => {
	res.render('home', {
		stuff: "This is something"
	});
});


//connecting to mongodb

const Schema = mongoose.Schema;

mongoose.connect('mongodb+srv://testBoy:1234testBoy@cluster0.icnph.mongodb.net/Cluster0?retryWrites=true&w=majority',
	{ useNewUrlParser: true },
	() => console.log('connected')
);

// set static and route app to it

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log('server is listening on ' + PORT))

