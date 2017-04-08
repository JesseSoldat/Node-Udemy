const request = require('request');

let url = 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia';

request({
	url: url,
	json: true
}, (error, response, body) => {
	console.log(body);
});