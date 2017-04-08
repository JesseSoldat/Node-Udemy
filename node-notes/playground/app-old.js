const fs = require('fs');
const os = require('os');
const _ = require('lodash');

const notes = require('./notes.js');

console.log(_.isString(1));
console.log(_.isString('JLab'));

let array = [1,2,4,5,6,1,3,5,6,4];
console.log(_.uniq(array));


let user = os.userInfo();

let greeting = "Hello to all my friends and enemies";

let res = notes.addNote();
// console.log(res);

console.log(notes.add(5,5));

// console.log(user);
// fs.appendFileSync('user-info.txt', `Hello ${user.username}! You are ${notes.age} years old.`);

// fs.appendFile('greetings.txt', greeting, function(err){
// 	if(err) {
// 		console.log(err);
// 	}
// });