import { clearDisplay } from "./webpage";
import { addNewProject, deleteProject } from "./createProject";
import { addNewNoteBtn, updateNotesMenu } from "./createTaskUi";

//FUNCTIONS//
//toggles the display mode of the card and it's content used for creating new projects
const createNewProjectCardUi = () => {
  const card = document.getElementById("main-create-new-project-card-ui");
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

const renderMain = (project) => {
  //clearDisplay();
  addNewNoteBtn(project);
  updateNotesMenu(project);
};

//creates buttons for the user-made projects
const createProjectMenuBtns = (project) => {
  const projectsContainer = document.createElement("div");
  projectsContainer.classList.add("user-menu-btn-box");

  const newProjectBtn = document.createElement("button");
  newProjectBtn.classList.add("user-menu-btn");
  newProjectBtn.textContent = project.name;
  newProjectBtn.addEventListener("click", () => {
    renderMain(project);
    console.log(project.name);
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("user-menu-delete-btn");
  projectsContainer.appendChild(newProjectBtn);
  projectsContainer.appendChild(deleteBtn);
  deleteBtn.addEventListener('click', () => {
    deleteProject(project);
  });
  return projectsContainer;
};

//updates the project section of the menu with the projects
const updateProjectMenu = (projectList) => {
  const menuProjects = document.getElementById("menu-projects");
  menuProjects.textContent = "";
  for (let project of projectList) {
    menuProjects.appendChild(createProjectMenuBtns(project));
  }
  console.log(`Project list: ${projectList} \n Number of projects: ${projectList.length}`);
};

export { createNewProjectCardUi, createProjectMenuBtns, updateProjectMenu };
