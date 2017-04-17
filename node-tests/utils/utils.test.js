const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
	let res = utils.add(33,11);
	// if(res !== 44) {
	// 	throw new Error(`Expected 44, but got ${res}.`);
	// }
	expect(res).toBe(44).toBeA('number');

});

it('should square a number', () => {
	let res = utils.square(3);
	// if(res !== 9) {
	// 	throw new Error(`Expected 9 but go ${res}.`)
	// }
	expect(res).toBe(9).toBeA('number');
});

it('should expect some values', () => {
	// expect(12).toNotBe(11);
	// expect({name: 'Andrew'}).toEqual({name: 'Andrew'});
	// expect({name: 'Andrew'}).toNotEqual({name: 'Jesse'});
	// expect([1,2,3,4,5]).toInclude(4);
	// expect([1,2,3,4,5]).toExclude(47);
	expect({
		name: 'Jesse',
		age: 36,
		location: 'Bangkok'
	}).toInclude({
		age: 36
	});
});
//can use toExclude for objects as well

it('should verify first and last names are set', () => {
	let user = {
		age: 36,
		location: 'Bangkok',
		married: false
	};
	let fullName = 'Jesse Soldat'
	let res = utils.setName(user, fullName);
	// console.log(res);
	//objects are passed by reference
	expect(user).toEqual(res);
	expect(res).toInclude({firstName: 'Jesse', lastName: 'Soldat'}).toBeA('object');
});