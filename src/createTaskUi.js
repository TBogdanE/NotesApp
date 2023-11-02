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
    card.classList.add("hidden");
    submitButton.removeEventListener("click", newNoteSubmitButtonListener);
  };
  submitButton.addEventListener("click", newNoteSubmitButtonListener);
};

export { createNewNoteCardUi, addNewNoteBtn };
