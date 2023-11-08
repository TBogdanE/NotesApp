import { clearDisplay } from "./webpage";
import { createNewNote } from "./createTask";

//creates button that is used for creating new notes
const addNewNoteBtn = (project) => {
  const main = document.getElementById("main");
  const topMenu = document.createElement("div");
  topMenu.id = "main-create-new-note-header";
  const newNoteBtn = document.createElement("button");
  newNoteBtn.id = "main-create-new-note-btn";
  newNoteBtn.textContent = "+ Create new note";
  //event listener that triggers the UI that takes input for the notes
  newNoteBtn.addEventListener("click", () => {
    //creates new card UI that takes new note info
    createNewNoteCardUi(project);
  });
  main.appendChild(topMenu);
  topMenu.appendChild(newNoteBtn);
};

//creates the UI for the new note inputs
const createNewNoteCardUi = (project) => {
  const card = document.getElementById("new-note-card-ui");
  const titleInput = document.getElementById("new-note-card-ui-title-input");
  const descriptionInput = document.getElementById(
    "new-note-card-ui-description-input"
  );
  const setImportant = document.getElementById("new-note-card-ui-important");
  const setDate = document.getElementById("new-note-card-ui-add-date");
  const setColor = document.getElementById("new-note-card-ui-color");
  setColor.addEventListener("input", () => {
    const selectedColor = setColor.value;
    return selectedColor;
  });
  const submitButton = document.getElementById("new-note-card-ui-submit");

  //toggles the card
  if (card.classList.contains("hidden")) {
    card.classList.remove("hidden");
  }

  // event listener that procees with the note creation
  const newNoteSubmitButtonListener = (event) => {
    //prevents the refresh of the page
    event.preventDefault();
    //creates the new note with the user inputs
    createNewNote(
      project,
      titleInput.value,
      descriptionInput.value,
      setImportant.value,
      setDate.value,
      setColor
    );
    updateNotesMenu(project);
    card.classList.add("hidden");
    submitButton.removeEventListener("click", newNoteSubmitButtonListener);
  };
  submitButton.addEventListener("click", newNoteSubmitButtonListener);
};

//display the notes of a selected project
const updateNotesMenu = (projects) => {
  const main = document.getElementById("main");
  let cardSection = document.getElementById("main-notes-sct");
  //checks if cardSection isn't already created
  if (!cardSection) {
    cardSection = document.createElement("div");
    cardSection.id = "main-notes-sct";
    main.appendChild(cardSection);
  }

  clearDisplay(cardSection);
  main.appendChild(cardSection);
  //displays all the notes inside a project
  for (let note of projects.noteList) {
    cardSection.appendChild(createNoteCard(note, projects));
  }
};

//creates the UI for the card
const createNoteCard = (note, projects) => {
  const noteCard = document.createElement("div");
  noteCard.classList.add("note-card");
  noteCard.appendChild(createCardDoneBtn(note));
  noteCard.appendChild(createCardElements("note-card-title", note.title));
  noteCard.appendChild(createCardElements("note-card-text", note.text));
  noteCard.appendChild(
    createCardElements("note-card-important", note.important)
  );
  noteCard.appendChild(createCardElements("note-card-date", note.date));
  noteCard.appendChild(createCardEditBtn(note));
  noteCard.appendChild(createCardDeleteBtn(note, projects));
  return noteCard;
};

//for a better organisation, all the content of the note card
//will be created using this function
const createCardElements = (cls, text) => {
  const paragraph = document.createElement("p");
  const txt = document.createElement("div");
  txt.classList.add(cls);
  paragraph.textContent = text;
  txt.appendChild(paragraph);
  return txt;
};

//creates the button that toggles if user did or didn't finish the task
const createCardDoneBtn = (note) => {
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("note-card-btn-container");
  const btn = document.createElement("button");
  btn.classList.add("note-card-btn");
  btn.addEventListener("click", () => {
    note.doneBtn();
  });
  btnContainer.appendChild(btn);
  return btnContainer;
};

//creates the button that let user edit the note content
const createCardEditBtn = (note) => {
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("note-card-btn-container");
  const btn = document.createElement("button");
  btn.classList.add("note-card-btn");
  btn.addEventListener("click", () => {
    note.editNote(note);
  });
  btnContainer.appendChild(btn);
  return btnContainer;
};

//creates the button that deletes the note
const createCardDeleteBtn = (note, project) => {
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("note-card-btn-container");
  const btn = document.createElement("button");
  btn.classList.add("note-card-btn");
  btn.addEventListener("click", () => {
    note.deleteNote(project);
  });
  btnContainer.appendChild(btn);
  return btnContainer;
};

export { createNewNoteCardUi, addNewNoteBtn, updateNotesMenu };
