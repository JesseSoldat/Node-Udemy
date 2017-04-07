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
	notes.addNote(argv.title, argv.body);

} else if ( command === 'read') {
	notes.getNote(argv.title);

} else if ( command === 'remove' ) {
	notes.removeNote(argv.title);

} else if (command === 'list') {
	notes.getAll();

} else {
	console.log('Command not recognized');
}

// node app.js add --title=JLab --body="Hello from Bangkok"
