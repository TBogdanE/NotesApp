import { projectList } from "./createProject";
import { updateNotesMenu } from "./createTaskUi";
import { updateLocalStorage } from "./localStorageHandle";

//stores all the id's of the created notes
const _noteId = [];

//the class on which other notes will be created
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

  //generates a random ID and checks if it's not already used
  newId() {
    const id = Math.random().toString(36).substring(2, 12);
    if (_noteId.includes(id)) {
      //if ID is already used, will generate another one
      return this.newId();
    }
    return id;
  }

  //changes the done btn state
  doneBtn() {
    this.done = !this.done;
  }

  //updates the local storage after the note is edited
  editNote() {
    updateLocalStorage(projectList);
  }

  //deletes the note by it's id
  deleteNote(project) {
    const noteIndex = project._noteList.findIndex(
      (note) => note._id === this._id
    );

    if (noteIndex !== -1) {
      project._noteList.splice(noteIndex, 1);
      updateNotesMenu(project);
      updateLocalStorage(projectList);
    }
  }
}

//creates the new note
const createNewNote = (project, title, text, important, date, color) => {
  const note = new Note(title, text, important, date, color);
  //pushes the note into it's project noteList
  project._noteList.push(note);
  updateLocalStorage(projectList);
};

export { Note, createNewNote };
