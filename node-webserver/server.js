const express = require('express');
const hbs = require('hbs');

let app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	// res.send('<h1>Hello from express</h1>');
	// res.send({
	// 	name: 'Jesse',
	// 	likes: ['Hiking', 'Travel', 'Thai', 'Japanese']
	// });
	res.render('home.hbs', {
		pageTitle: 'Home Page',
		currentYear: new Date().getFullYear(),
		welcomeMessage: 'Welcome to Jlab'
	});
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'About Page',
		currentYear: new Date().getFullYear()
	});
});

app.get('/bad', (req, res) => {
	res.send({
		errorMsg: 'Unable to handle request'
	});
});

app.listen(3000);