import { clearDisplay } from "./webpage";
import { createNewNoteCardUi, updateNotesMenu } from "./createTaskUi";
import { projectList } from "./createProject";

//note class structure
class Note {
  constructor(title, text, important, date) {
    this.id = this.newId();
    this.title = title;
    this.text = text;
    this.important = important;
    this.date = date;
    this.done = false; // Initialize as not done
  }

  newId() {
    const id = Math.random().toString(36).substring(2, 12);
    console.log(`Random character: ${id}`);
    return id;
  }
  doneBtn() {
    //this.done = true;
    console.log("done");
  }

  deleteCard(project) {
    const noteIndex = project.noteList.findIndex((note) => note.id === this.id);

    if (noteIndex !== -1) {
      project.noteList.splice(noteIndex, 1);
      updateNotesMenu(project);
      console.log(`Note: ${this.title} was removed`);
      console.log(project.noteList);
    }
  }
}

//creates the new note
const createNewNote = (project, title, text, important, date) => {
  const note = new Note(title, text, important, date);
  /*pushes the note to it's project array*/
  project.noteList.push(note);
  console.log(project.noteList);
};

/*const deleteNote = (event) => {
  const noteElements = event.target.closest(".note-card");
  if (noteElements) {
    noteElements.remove();
    displayNotes(project);
    console.log('removed!');
  }
};*/

export { createNewNote };
