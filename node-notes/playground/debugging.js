//node debug debugger.js
// n (new line)
// c (go to debugger; or end)
//repl (run any node commands here)

let person = {
	name: 'Jesse'
};

person.age = 36;

debugger;

person.name = 'Nate';

console.log(person);