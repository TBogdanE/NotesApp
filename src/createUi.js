import { addNewProject } from "./createProject";

//FUNCTIONS//
//toggles the display mode of the card and it's content used for creating new projects

function createNewProjectCardUi() {
  const card = document.getElementById("main-create-new-project-ui");
  const nameInput = document.getElementById("main-create-new-project-submit");
  const submitButton = document.getElementById(
    "main-create-new-project-submit-btn"
  );

  //checks if the card is already selected
  if (card.classList.contains("hidden")) {
    card.classList.remove("hidden");
  }

  // Define the event listener function
  function submitButtonListener(event) {
    event.preventDefault();
    addNewProject(nameInput.value);
    card.classList.add("hidden");
    // Unregister the event listener
    submitButton.removeEventListener("click", submitButtonListener);
  }
  // Add the event listener
  submitButton.addEventListener("click", submitButtonListener);
}

//creates new buttons for the new user-made projects
function createProjectMenuBtns(name) {
  const newProjectBtn = document.createElement("button");
  newProjectBtn.classList.add("menu-btn");
  newProjectBtn.textContent = name;
  return newProjectBtn;
}

export { createNewProjectCardUi, createProjectMenuBtns };
