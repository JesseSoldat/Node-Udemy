const fs = require('fs');
const os = require('os');

let user = os.userInfo();

let greeting = "Hello to all my friends and enemies";

console.log(user);
fs.appendFileSync('user-info.txt', `Hello ${user.username}!`);

// fs.appendFile('greetings.txt', greeting, function(err){
// 	if(err) {
// 		console.log(err);
// 	}
// });