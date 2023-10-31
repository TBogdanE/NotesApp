import { addNewProject } from "./createProject";

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

  const newProjectSubmitButtonListener = (event) => {
    event.preventDefault();
    addNewProject(nameInput.value);
    nameInput.value = '';
    card.classList.add("hidden");
    // Unregister the event listener
    submitButton.removeEventListener("click", newProjectSubmitButtonListener);
  };
  // Add the event listener
  submitButton.addEventListener("click", newProjectSubmitButtonListener);
};

const projectsMain = () => {
  const main = document.getElementById("main");
  const topMenu = document.createElement("div");
  topMenu.id = "main-create-new-note-header";
  //topMenu.classList.add("fade-in");
  const newNoteBtn = document.createElement("button");
  newNoteBtn.id = "main-create-new-note-btn";
  newNoteBtn.textContent = "+ Create new note";
  main.appendChild(topMenu);
  topMenu.appendChild(newNoteBtn);
};

//creates new buttons for the new user-made projects
const createProjectMenuBtns = (name) => {
  const newProjectBtn = document.createElement("button");
  newProjectBtn.classList.add("menu-btn");
  newProjectBtn.textContent = name;
  newProjectBtn.addEventListener("click", () => {
    projectsMain(name);
  });
  return newProjectBtn;
};

export { createNewProjectCardUi, createProjectMenuBtns };
