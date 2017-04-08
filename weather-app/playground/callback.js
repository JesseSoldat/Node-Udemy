https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia

let getUser = (id, callback) => {
	let user = {
		id: id,
		name: 'Jesse'
	};
	setTimeout(() => {
		callback(user);
	},2000);
};

getUser(43, (userObj) => {
	console.log(userObj);
});