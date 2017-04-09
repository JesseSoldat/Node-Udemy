//a6cc87de077b76aaea435aefec71096e
//https://api.darksky.net/forecast/a6cc87de077b76aaea435aefec71096e/33.7709887,-84.29633919999999
const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocodeAddress(argv.address, (err, results) => {
	if(err){
		console.log(err);
	} else {
		console.log(JSON.stringify(results, undefined, 2));
		let lat = results.lat;
		let lng = results.lng;
		
		weather.getWeather(lat, lng, (err, weatherResults) => {
			if(err) {
				console.log(err);
			} else {
				// console.log(weatherResults);
				console.log(`It's currently ${weatherResults.temp}.\nIt feels like ${weatherResults.apparentTemp}`);
			}
		});
	}
});

