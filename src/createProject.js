//imports
import { createNewProjectCardUi, createProjectMenuBtns } from "./createUi";

//variables declaration
const main = document.getElementById("main");
const createProjectBtn = document.getElementById("menu-btn-addproject");
const menuProjectSct = document.getElementById("menu-project-sct");

let projectList = [];

class Project {
  constructor(name) {
    this.name = name;
    this.projectBtn = document.createElement("button");
    this.projectBtn.classList.add("menu-project-btn");
    this.projectBtn.textContent = name;
    return name;
  }
}

//event listeners
createProjectBtn.addEventListener("click", createNewProjectCardUi);

//functions
function addNewProject(text) {
  main.textContent = "";
  const projectName = new Project(text);
  projectList.push(projectName);
  updateProjectMenu();
  //menuProjectSct.appendChild(createProjectMenuBtn(projectName.name));
  return projectName;
}

function updateProjectMenu() {
  for(let project of projectList) {
    menuProjectSct.appendChild(createProjectMenuBtns(project.name));
  }
}

/*function createProject() {

}*/

//exports
export { projectList, addNewProject };
