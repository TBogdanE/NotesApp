//imports
import { createNewProjectUi } from "./createUi";

//variables declaration
const main = document.getElementById("main");
const createProjectBtn = document.getElementById("menu-btn-addproject");

let projectList = [];

class Project {
  constructor(name) {
    this.name = name;
    this.projectBtn = document.createElement("button");
    this.projectBtn.classList.add("menu-project-btn");
    this.projectBtn.textContent = name;
    return console.log(name);
  }
}

//event listeners
createProjectBtn.addEventListener("click", createProject);

//functions
function addNewProject(text) {
  main.textContent = "";
  const projectName = new Project(text);
  projectList.push(projectName);
  return projectName;
}

function createProject() {
  createNewProjectUi();
}

//exports
export { projectList, addNewProject };
