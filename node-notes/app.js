const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

// console.log('Process', process.argv);
// console.log('Yargs', argv);


var command = process.argv[2];

if(command === 'add') {
	console.log('Adding new note');
	notes.addNote(argv.title, argv.body);

} else if ( command === 'read') {
	console.log('Reading note');

} else if ( command === 'remove' ) {
	console.log('Removing note');

} else if (command === 'list') {
	console.log('Listing all notes');

} else {
	console.log('Command not recognized');
}

// node app.js add --title=JLab --body="Hello from Bangkok"
