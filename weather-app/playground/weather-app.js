const yargs = require('yargs');
const request = require('request');

let argv = yargs
	.options({
		lat: {
			demand: true,
			describe: 'Enter the latitude to get the weather',
			string: true,
		},
		lng: {
			demand: true,
			describe: 'Enter the longitute to get the weather',
			string: true
		}
	})
	.help()
	.argv;

let getWeather = (argv) => {
	let lat = argv.lat;
	let lng = argv.lng;
	let url = `https://api.darksky.net/forecast/a6cc87de077b76aaea435aefec71096e/${lat},${lng}`;
	request({
		url: url,
		json: true
	}, (error, response, body) => {
		// console.log(response.statusCode);
		if(!error && response.statusCode === 200){
			console.log(JSON.stringify(body.currently, undefined, 2));

		} else {
			console.log('Unable to fetch weather');
		}
	});
}

getWeather(argv);