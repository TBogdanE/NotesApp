//IMPORTS//
import { clearDisplay } from "./webpage";
import {
  createNewProjectCardUi,
  createProjectMenuBtns,
} from "./createProjectUi";

//VARIABLE DECLARATION
const main = document.getElementById("main");
const createProjectBtn = document.getElementById("menu-btn-addproject");
const menuProjects = document.getElementById("menu-projects");

let projectList = [];

class Project {
  constructor(name) {
    this.name = name;
    this.noteList = [];
  }
}

//EVENT LISTENERS//
createProjectBtn.addEventListener("click", createNewProjectCardUi);

//FUNCTIONS//
//called from createProjectUi.js, will create a new project and save it to the array
const addNewProject = (name) => {
  const projectName = new Project(name);
  projectList.push(projectName);
  updateProjectMenu(projectList);
  //return projectName;
};

//updates the project section of the menu with the projects
const updateProjectMenu = (projectList) => {
  menuProjects.textContent = "";
  for (let project of projectList) {
    menuProjects.appendChild(createProjectMenuBtns(project));
  }
};

//EXPORTS//
export { projectList, addNewProject };
