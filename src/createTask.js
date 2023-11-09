import { clearDisplay } from "./webpage";
import { createNewNoteCardUi, updateNotesMenu } from "./createTaskUi";
import { projectList } from "./createProject";

//note class structure
class Note {
  constructor(title, text, important, date, color) {
    this._id = this.newId();
    this.title = title;
    this.text = text;
    this.important = important;
    this.date = date;
    this.done = false;
    this.color = color;
  }

  newId() {
    const id = Math.random().toString(36).substring(2, 12);
    console.log(`Random character: ${id}`);
    return id;
  }

  doneBtn() {
    this.done = !this.done;
  }

  editNote() {
    console.log("Edit");
  }

  deleteNote(project) {
    const noteIndex = project.noteList.findIndex(
      (note) => note._id === this._id
    );

    if (noteIndex !== -1) {
      project.noteList.splice(noteIndex, 1);
      updateNotesMenu(project);
      console.log(`Note: ${this.title} was removed`);
      console.log(project.noteList);
    }
  }
}

//creates the new note
const createNewNote = (project, title, text, important, date, color) => {
  const note = new Note(title, text, important, date, color);
  /*pushes the note to it's project array*/
  project.noteList.push(note);
  console.log(project.noteList);
};

export { createNewNote };
