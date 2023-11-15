import { updateNotesMenu, editNoteCard } from "./createTaskUi";

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

  editNote(project) {
    editNoteCard(this, project);
  }

  deleteNote(project) {
    const noteIndex = project.noteList.findIndex(
      (note) => note._id === this._id
    );

    if (noteIndex !== -1) {
      project.noteList.splice(noteIndex, 1);
      updateNotesMenu(project);
      console.log(`Note: ${this.title} from ${project.name} was removed`);
    }
  }
}

//creates the new note
const createNewNote = (project, title, text, important, date, color) => {
  const note = new Note(title, text, important, date, color);
  //pushes the note to it's project noteList
  project.noteList.push(note);
};

export { createNewNote };
