const addNewNoteBtn = () => {
  const main = document.getElementById("main");
  const topMenu = document.createElement("div");
  topMenu.id = "main-create-new-note-header";
  const newNoteBtn = document.createElement("button");
  newNoteBtn.id = "main-create-new-note-btn";
  newNoteBtn.textContent = "+ Create new note";
  newNoteBtn.addEventListener("click", createNewNote);
  main.appendChild(topMenu);
  topMenu.appendChild(newNoteBtn);
};

const createNewNoteCardUi = () => {
  const card = document.getElementById("new-note-card-ui");
  const nameInput = document.getElementById("new-note-card-ui-submit-input");
  const submitButton = document.getElementById("new-note-card-ui-submit");

  //checks if the card is already selected
  if (card.classList.contains("hidden")) {
    card.classList.remove("hidden");
  }

  const newNoteSubmitButtonListener = (event) => {
    event.preventDefault();
    addNewProject(nameInput.value);
    nameInput.value = "";
    card.classList.add("hidden");
    submitButton.removeEventListener("click", newNoteSubmitButtonListener);
  };
  submitButton.addEventListener("click", newNoteSubmitButtonListener);
};

export { createNewNoteCardUi, addNewNoteBtn };
