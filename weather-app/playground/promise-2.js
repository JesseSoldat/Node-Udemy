const request = require('request');

let geocodeAddress = (address) => {
	let encodedAddress = encodeURIComponent(address);
	let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

	return new Promise((resolve, reject) => {
		request({
			url: url,
			json: true
		}, (error, response, body) => {
			if(error){
				reject('Unable to connect to Google servers');
			} else if (body.status === 'ZERO_RESULTS') {
				reject('Unable to find that address');
			} else if (body.status === 'OK') {	
				resolve({
					address: body.results[0].formatted_address,
					lat: body.results[0].geometry.location.lat,
					lng: body.results[0].geometry.location.lng,
				});
			}
		});
	});

};

geocodeAddress('30030').then((location) => {
	console.log(JSON.stringify(location, undefined, 2));
}, (err) => {
	console.log(err);
})