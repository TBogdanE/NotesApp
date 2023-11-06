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
  newNoteBtn.addEventListener("click", () => {
    createNewNoteCardUi(project);
  });
  main.appendChild(topMenu);
  topMenu.appendChild(newNoteBtn);
};

//creates the card for the new note form
const createNewNoteCardUi = (project) => {
  const card = document.getElementById("new-note-card-ui");
  const titleInput = document.getElementById("new-note-card-ui-title-input");
  const descriptionInput = document.getElementById(
    "new-note-card-ui-description-input"
  );
  const setImportant = document.getElementById("new-note-card-ui-important");
  const setDate = document.getElementById("new-note-card-ui-add-date");
  const submitButton = document.getElementById("new-note-card-ui-submit");

  if (card.classList.contains("hidden")) {
    card.classList.remove("hidden");
  }

  const newNoteSubmitButtonListener = (event) => {
    event.preventDefault();
    createNewNote(
      project,
      titleInput.value,
      descriptionInput.value,
      setImportant.value,
      setDate.value
    );
    displayNotes(project);
    card.classList.add("hidden");
    submitButton.removeEventListener("click", newNoteSubmitButtonListener);
  };
  submitButton.addEventListener("click", newNoteSubmitButtonListener);
};

//display the notes when project is selected
const displayNotes = (projects) => {
  const main = document.getElementById("main");
  const cardSection = document.createElement("div");
  main.appendChild(cardSection);
  cardSection.id = "main-notes-sct";
  for (let note of projects.noteList) {
    cardSection.appendChild(createNoteCard(note));
  }
};

const createNoteCard = (note) => {
  const noteCard = document.createElement("div");
  noteCard.id = "note-card";
  noteCard.appendChild(createCardElements('note-card-title', note.title));
  noteCard.appendChild(createCardElements('note-card-text', note.text));
  noteCard.appendChild(createCardElements('note-card-important', note.important));
  noteCard.appendChild(createCardElements('note-card-date', note.date));
  /*
  const title = document.createElement("div");
  title.id = "note-card-title";
  title.textContent = note.title;
  const text = document.createElement("div");
  text.id = "note-card-text";
  text.textContent = note.text;
  const important = document.createElement("div");
  important.id = "note-card-important";
  important.textContent = note.important;
  const date = document.createElement("div");
  date.id = "note-card-date";
  date.textContent = note.date;
  noteCard.appendChild(title);
  noteCard.appendChild(text);
  noteCard.appendChild(important);
  noteCard.appendChild(date);*/
  return noteCard;
};

const createCardElements = (id, text) => {
  const paragraph = document.createElement("p");
  const txt = document.createElement("div");
  txt.id = id;
  paragraph.textContent = text;
  txt.appendChild(paragraph);
  return txt;
};

export { createNewNoteCardUi, addNewNoteBtn, displayNotes };
