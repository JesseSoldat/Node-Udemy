const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
	.options({
		a: {
			demand: true,
			alias: 'address',
			describe: 'Addres to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

let address = encodeURIComponent(argv.address);
let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}`;

axios.get(geocodeUrl).then((response) => {
	// console.log(response.data.status);

	if(response.data.status === 'ZERO_RESULTS') {
		throw new Error('Unable to find that address');
	}
	console.log(response.data.results[0].formatted_address);
	// console.log(JSON.stringify(response.data, undefined, 2));
	let lat = response.data.results[0].geometry.location.lat;
	let lng = response.data.results[0].geometry.location.lng;
	let weatherUrl = `https://api.darksky.net/forecast/a6cc87de077b76aaea435aefec71096e/${lat},${lng}`;
	return axios.get(weatherUrl);

}).then((response) => {
	let temp = response.data.currently.temperature;
	let apparentTemp = response.data.currently.apparentTemperature;
	console.log(`It's currently ${temp}.\nIt feels like ${apparentTemp}`);
}).catch((err) => {
	if(err.code === 'ENOTFOUND' || err.code === 'ETIMEDOUT') {
		console.log('Unable to connect to API servers');
	} else {
		console.log(err.message);
	}
});



