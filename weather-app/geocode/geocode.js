const request = require('request');

let geocodeAddress = (argvAddress, callback) => {

	let address = encodeURIComponent(argvAddress);
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
			callback('Unable to connect to Google servers');
			// console.log('Unable to connect to Google servers');
		} else if (body.status === 'ZERO_RESULTS') {
			callback('Unable to find that address');
			// console.log('Unable to find that address');
		} else if (body.status === 'OK') {
			callback(undefined, {
				address: `Address: ${body.results[0].formatted_address}`,
				lat: `Lat: ${body.results[0].geometry.location.lat}`,
				lng: `Lng: ${body.results[0].geometry.location.lng}`
			});
			// console.log(`Address: ${body.results[0].formatted_address}`);
			// console.log(`Lat: ${body.results[0].geometry.location.lat}`);
			// console.log(`Lng: ${body.results[0].geometry.location.lng}`);
		}
	});
}

module.exports = {
	geocodeAddress,
};

