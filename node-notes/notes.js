const fs = require('fs');

let fetchNotes = () => {
	try {
		let notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	} catch (err) {
		// console.log(err);
		return [];
	}
};

let saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

let addNote = (title, body) => {
	let notes = fetchNotes();
	let note = {
		title,
		body
	};

	let duplicateNotes = notes.filter((note) => note.title === title);
	
	if(duplicateNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note
	}
	//if nothing is returned (no return statement) then UNDEFINDED is returned
}

let getNote = (title) => {
	let notes = fetchNotes();
	let filteredNotes = notes.filter((note) => note.title === title);
	return filteredNotes[0];
}

let removeNote = (title) => {
	let notes = fetchNotes();
	let filteredNotes = notes.filter((note) => note.title !== title) 
	saveNotes(filteredNotes);

	return notes.length !== filteredNotes.length;
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
