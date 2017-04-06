const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

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