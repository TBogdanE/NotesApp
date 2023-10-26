import { addNewProject } from "./createProject";

function createNewProjectCardUi() {
  const card = document.getElementById("main-create-new-project-ui");
  const nameInput = document.getElementById("main-create-new-project-submit");
  const submitButton = document.getElementById(
    "main-create-new-project-submit-btn"
  );

  if (card.style.display === "flex") return;

  card.style.display = "flex";

  submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    addNewProject(nameInput.value);
    card.style.display = "none";
  });
}

function createProjectMenuBtns(name) {
  const newProjectBtn = document.createElement("button");
  newProjectBtn.classList.add("menu-btn");
  newProjectBtn.textContent = name;
  return newProjectBtn;
}

export { createNewProjectCardUi, createProjectMenuBtns };
