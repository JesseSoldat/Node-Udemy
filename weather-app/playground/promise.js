let asyncAdd = (a, b) => {
	return new Promise((resolve, reject) => {
		if(typeof a === 'number' && typeof b === 'number'){
			setTimeout(() => {
				resolve(a + b);
			},1000)
		} else {
			reject('Arguments must both be numbers!');
		}
	});
};

let somePromise = new Promise((resolve, reject) => {
	let response = Math.random();
	console.log('Random Num: ', response);
	if(response <= .5){
		setTimeout(() => {
			resolve('Promise resolved!')
		},1500);
	} else if (response > .5) {
		reject('Promise rejected!')
	}

});

somePromise.then((msg) => {
	console.log(msg);
}, (errMsg) => {
	console.log(errMsg);
});

let num1 = Math.floor((Math.random() * 10) + 1);
let num2 = Math.floor((Math.random() * 10) + 1);
let num3 = Math.floor((Math.random() * 100) + 1);

//A my example
// asyncAdd(num1, num2).then((result) => {
// 	console.log('Result: ', result);
// 	//Promise Chaining
// 	asyncAdd(result, num3).then((finalRes) => {
// 		console.log('Final Result: ', finalRes);
// 		console.log('----------------------');
// 	}, (finalErr) => {
// 		console.log(finalErr);
// 	});
// }, (err) => {
// 	console.log(err);
// });
//B from example
// asyncAdd(num1, num2).then((result) => {
// 	console.log('Result: ', result);
// 	return asyncAdd(result, num3);
// }, (err) => {
// 	console.log(err);
// }).then((result) => {
// 	console.log('Final Result: ', result);
// 	console.log('----------------------');
// }, (err) => {
// 	console.log(err);
// });
//both print same result

//C
asyncAdd(num1, num2).then((res) => {
	console.log('First Result: ', res);
	return asyncAdd(res, num3);
}).then((res) => {
	console.log('Final Result: ', res);
}).catch((err) => {
	console.log(err);
});
