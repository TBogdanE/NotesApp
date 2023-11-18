import { projectList } from "./createProject";
import { updateNotesMenu } from "./createTaskUi";
import { addToLocalStorage } from "./localStorageHandle";

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

  newId() {
    const id = Math.random().toString(36).substring(2, 12);
    if (_noteId.includes(id)) {
      return this.newId();
    }
    console.log(`Id: ${id}`);
    return id;
  }

  doneBtn() {
    this.done = !this.done;
  }

  editNote() {
    addToLocalStorage(projectList);
  }

  deleteNote(project) {
    const noteIndex = project._noteList.findIndex(
      (note) => note._id === this._id
    );

    if (noteIndex !== -1) {
      project._noteList.splice(noteIndex, 1);
      updateNotesMenu(project);
      //handle localStorage of the newProject
      addToLocalStorage(projectList);
      console.log(`Note: ${this.title} from ${project.name} was removed`);
    }
  }
}

//creates the new note
const createNewNote = (project, title, text, important, date, color) => {
  const note = new Note(title, text, important, date, color);
  //pushes the note to it's project noteList
  project._noteList.push(note);
  addToLocalStorage(projectList);
};

export { Note, createNewNote };
