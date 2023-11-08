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
    updateNotesMenu(project);
    card.classList.add("hidden");
    submitButton.removeEventListener("click", newNoteSubmitButtonListener);
  };
  submitButton.addEventListener("click", newNoteSubmitButtonListener);
};

//display the notes when project is selected
const updateNotesMenu = (projects) => {
  const main = document.getElementById("main");
  let cardSection = document.getElementById("main-notes-sct");
  if (!cardSection) {
    cardSection = document.createElement("div");
    cardSection.id = "main-notes-sct";
    main.appendChild(cardSection);
  }
  clearDisp(cardSection);
  main.appendChild(cardSection);
  for (let note of projects.noteList) {
    cardSection.appendChild(createNoteCard(note, projects));
  }
};

const clearDisp = (container) => {
  // Clear all children within the container
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};

const createNoteCard = (note, projects) => {
  const noteCard = document.createElement("div");
  noteCard.id = "note-card";
  noteCard.appendChild(createCardDoneBtn(note));
  noteCard.appendChild(createCardElements("note-card-title", note.title));
  noteCard.appendChild(createCardElements("note-card-text", note.text));
  noteCard.appendChild(
    createCardElements("note-card-important", note.important)
  );
  noteCard.appendChild(createCardElements("note-card-date", note.date));
  noteCard.appendChild(createCardDeleteBtn(note, projects));
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

const createCardDoneBtn = (note) => {
  const btnContainer = document.createElement("div");
  btnContainer.id = "note-card-btn-container";
  const btn = document.createElement("button");
  btn.id = "note-card-btn";
  btn.addEventListener("click", () => {
    note.doneBtn();
  });
  btnContainer.appendChild(btn);
  return btnContainer;
};

const createCardDeleteBtn = (note, project) => {
  const btnContainer = document.createElement("div");
  btnContainer.id = "note-card-btn-container";
  const btn = document.createElement("button");
  btn.id = "note-card-btn";
  btn.addEventListener("click", () => {
    note.deleteCard(project);
  });
  btnContainer.appendChild(btn);
  return btnContainer;
};

export { createNewNoteCardUi, addNewNoteBtn, updateNotesMenu };
