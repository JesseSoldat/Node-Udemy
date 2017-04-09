const request = require('request');

let getWeather = (lat, lng, callback) => {
	
	let url = `https://api.darksky.net/forecast/a6cc87de077b76aaea435aefec71096e/${lat},${lng}`;
	// console.log(url);

	request({
		url: url,
		json: true
		}, (error, response, body) => {
		// console.log(response.statusCode);
		if(!error && response.statusCode === 200){
			// console.log(JSON.stringify(body.currently, undefined, 2));
			let w = body.currently;
			// console.log(w);
			callback(undefined, {
				temp: w.temperature,
				apparentTemp: w.apparentTemperature,
			});

		} else {
			// console.log('Unable to fetch weather');
			callback('Unable to fetch weather')
		}
	});
}

module.exports = {
	getWeather,
}