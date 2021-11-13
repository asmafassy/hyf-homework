//Q4) Step 3: Smart-ease - Back to the basics!
//NOnoN0nOYes (Note taking app)

//-->Save a note
const notes = [];
function saveNote(content, id) {
  if (typeof content === "string" && typeof id === "number") {
    let note = {
      // creating a single note object
      content: content,
      id: id,
    };
    notes.push(note);
    console.log(notes);
  } else {
    console.log(
      "Your input is invalid.Content should be a string and the Id shold be a number"
    );
  }
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

//--> Get a note
function getNote(id) {
  for (let i = 0; i < notes.length; i++) {
    console.log("index = ", i);
    const note = notes[i];
    console.log(note.id, note.content);

    if (note.id === id) {
      return note;
    }
  }
}

getNote(1); // show id
console.log(getNote(1));

//-->Log out notes
let id = 2;
function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    let note = notes[i];
    let msg =
      "The note with id : " +
      note.id +
      " has the following note text : " +
      note.content;
    console.log(msg);
  }
}

logOutNotesFormatted();

//-->Unique (delete a note when the id is specified)

const noteToDelete = 1;
const filteredNote = notes.filter((item) => item.id !== noteToDelete);
console.log(filteredNote);





