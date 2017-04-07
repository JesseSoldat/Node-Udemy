const fs = require('fs');

let originalNote = {
	title: 'Some title',
	body: 'Some body'
};

let originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

let noteString = fs.readFileSync('notes.json');
let notesObject = JSON.parse(noteString);
console.log(notesObject.title);
console.log(notesObject.body);

// let obj = {
// 	name: 'Jesse'
// };

// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// let personString = '{"name": "Jesse", "age": 36}';
// let personObj = JSON.parse(personString);
// console.log(personObj);
// console.log(typeof personObj);