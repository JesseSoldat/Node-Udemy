const fs = require('fs');

let addNote = (title, body) => {
	let notes = [];
	let note = {
		title,
		body
	};

	try {
		let notesString = fs.readFileSync('notes-data.json');
		notes = JSON.parse(notesString);
	} catch (err) {
		// console.log(err);
	}

	let duplicateNotes = notes.filter((note) => note.title === title);
	
	if(duplicateNotes.length === 0) {
		notes.push(note);
		fs.writeFileSync('notes-data.json', JSON.stringify(notes));
	}
	
}
let getNote = (title) => {
	console.log(title);
}

let removeNote = (title) => {
	console.log(title);
}

let getAll = () => {
	console.log('getting all notes');
}

module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote,
}
