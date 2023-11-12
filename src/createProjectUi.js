import { clearDisplay, setActiveBtn } from "./webpage";
import { addNewProject, deleteProject } from "./createProject";
import { addNewNoteBtn, updateNotesMenu } from "./createTaskUi";

//FUNCTIONS//
//creates the UI with the form, used for creating new projects
const createNewProjectCardUi = () => {
  const main = document.getElementById("main");

  const card = document.createElement("div");
  card.id = "main-create-new-project-card-ui";

  const cardTitle = document.createElement("div");
  cardTitle.id = "main-create-new-project-title";
  cardTitle.textContent = "Add a new project";

  const form = document.createElement("form");
  form.id = "main-create-new-project-form";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "main-create-new-project-input";
  nameInput.placeholder = "Project Name:";
  nameInput.name = "new-project-label";

  const submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.value = "Add";
  submitButton.id = "main-create-new-project-submit";

  main.appendChild(card);
  card.appendChild(cardTitle);
  card.appendChild(form);
  form.appendChild(nameInput);
  form.appendChild(submitButton);

  //button that sumbits the new project
  const newProjectSubmitButtonListener = (event) => {
    event.preventDefault();
    clearDisplay(main);
    addNewProject(nameInput.value);
    nameInput.value = "";
    card.classList.add("hidden");
    // Unregister the event listener
    submitButton.removeEventListener("click", newProjectSubmitButtonListener);
  };
  // Add the event listener
  submitButton.addEventListener("click", newProjectSubmitButtonListener);
};

//creates the button used for creating new notes
const renderMain = (project) => {
  //clearDisplay();
  addNewNoteBtn(project);
  updateNotesMenu(project);
};

//creates buttons for the user-made projects, used for displayinge projects content
const createProjectMenuBtns = (project) => {
  const projectsContainer = document.createElement("div");
  projectsContainer.classList.add("user-menu-btn-box");

  const newProjectBtn = document.createElement("button");
  newProjectBtn.classList.add("user-menu-btn");
  newProjectBtn.textContent = project.name;
  projectsContainer.appendChild(newProjectBtn);
  newProjectBtn.addEventListener("click", () => {
    setActiveBtn(newProjectBtn);
    renderMain(project);
    console.log(project.name);
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("user-menu-delete-btn");
  projectsContainer.appendChild(deleteBtn);
  deleteBtn.addEventListener("click", () => {
    deleteProject(project);
  });
  return projectsContainer;
};

//updates the project section of the menu with the projects
const updateProjectMenu = (projectList) => {
  //const main = document.getElementById("main");
  const menuProjects = document.getElementById("menu-projects");
  clearDisplay(menuProjects);
  //menuProjects.textContent = "";
  for (let project of projectList) {
    menuProjects.appendChild(createProjectMenuBtns(project));
  }
  console.log(
    `Project list: ${projectList} \n Number of projects: ${projectList.length}`
  );
};

export { createNewProjectCardUi, createProjectMenuBtns, updateProjectMenu };
