import { clearDisplay } from "./webpage";
import { createNewNoteCardUi } from "./createTaskUi";

//note class structure
class Note {
  constructor(title, text, important, date) {
    this.title = title;
    this.text = text;
    this.important = important;
    this.date = date;
  }
}

//creates the new note
const createNewNote = (project, title, text, important, date) => {
  const note = new Note(title, text, important, date);
  /*pushes the note to it's project array*/
  project.noteList.push(note);
  console.log(project.noteList);
};

//display the notes when project is selected
const displayNotes = () => {
  console.log("ceva");
  /*const main = document.getElementById("main");
  main.textContent = "";
  for (let note of projectList) {
    //main.appendChild(createNoteUi(note.name));
    console.log(note);
  }*/
};

export { createNewNote, displayNotes };
