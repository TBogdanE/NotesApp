import { clearDisplay } from "./webpage";
import { addNewProject } from "./createProject";
import { addNewNoteBtn, displayNotes } from "./createTaskUi";

//FUNCTIONS//
//toggles the display mode of the card and it's content used for creating new projects
const createNewProjectCardUi = () => {
  const card = document.getElementById("main-create-new-project-ui");
  const nameInput = document.getElementById("main-create-new-project-input");
  const submitButton = document.getElementById(
    "main-create-new-project-submit"
  );

  //checks if the card is already selected
  if (card.classList.contains("hidden")) {
    card.classList.remove("hidden");
  }

  //button that sumbits the new project
  const newProjectSubmitButtonListener = (event) => {
    event.preventDefault();
    addNewProject(nameInput.value);
    nameInput.value = "";
    card.classList.add("hidden");
    // Unregister the event listener
    submitButton.removeEventListener("click", newProjectSubmitButtonListener);
  };
  // Add the event listener
  submitButton.addEventListener("click", newProjectSubmitButtonListener);
};

const renderMain = () => {
  //clearDisplay();
  addNewNoteBtn();
  //displayNotes();
};

//creates buttons for the user-made projects
const createProjectMenuBtns = (project) => {
  const newProjectBtn = document.createElement("button");
  newProjectBtn.classList.add("menu-btn");
  newProjectBtn.textContent = project.name;
  newProjectBtn.addEventListener("click", () => {
    renderMain(project.noteList);
  });
  return newProjectBtn;
};

export { createNewProjectCardUi, createProjectMenuBtns };
