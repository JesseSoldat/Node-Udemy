const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

// console.log('Process', process.argv);
// console.log('Yargs', argv);

// var command = process.argv[2];
let command = argv._[0];

if(command === 'add') {
	let note = notes.addNote(argv.title, argv.body);
	if(note){
		console.log('Note Created');
		console.log('------------');
		console.log(`Title: ${note.title}`);
		console.log(`Body: ${note.body}`);
	} else {
		console.log('Note title already taken');
	}

} else if ( command === 'read') {
	let note = notes.getNote(argv.title);
	if(note) {
		console.log('Note Found');
		console.log('------------');
		console.log(`Title: ${note.title}`);
		console.log(`Body: ${note.body}`);
	} else {
		console.log('Note not found');
	}

} else if ( command === 'remove' ) {
	let noteRemoved = notes.removeNote(argv.title);

	// if(noteRemoved) {
	// 	console.log(`The ${argv.title} note was removed`);
	// } else {
	// 	console.log(`The ${argv.title} note was NOT found.\nCheck that you entered the correct title`);
	// }
	let message = noteRemoved ? 'Note was removed' : 'Note not found';
	console.log(message);

} else if (command === 'list') {
	notes.getAll();

} else {
	console.log('Command not recognized');
}

// node app.js add --title=JLab --body="Hello from Bangkok"
