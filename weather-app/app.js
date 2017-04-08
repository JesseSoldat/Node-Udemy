const request = require('request');
const yargs = require('yargs');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

	let address = encodeURIComponent(argv.address);
	//decodeURIComponent

let url = 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia';
let url2 = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`;
request({
	url: url2,
	json: true
}, (error, response, body) => {
	// console.log(error);
	// console.log(JSON.stringify(body, undefined, 2));
	if(error){
		console.log('Unable to connect to Google servers');
	} else if (body.status === 'ZERO_RESULTS') {
		console.log('Unable to find that address');
	} else if (body.status === 'OK') {
		console.log(`Address: ${body.results[0].formatted_address}`);
		console.log(`Lat: ${body.results[0].geometry.location.lat}`);
		console.log(`Lng: ${body.results[0].geometry.location.lng}`);
	}
	

});