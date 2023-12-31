//IMPORTS//
import { updateProjectMenu } from "./createProjectUi";
import { updateLocalStorage } from "./localStorageHandle";

//VARIABLE DECLARATION
//const main = document.getElementById("main");

let projectList = [];

//the class on which other projects will be created
class Project {
  constructor(name) {
    this.name = name;
    this._noteList = [];
  }

  get noteList() {
    return this._noteList;
  }

  set noteList(noteList) {
    this._noteList = noteList;
  }
}

//called from createProjectUi.js, will create a new project and save it to the array
const addNewProject = (name) => {
  const projectName = new Project(name);
  projectList.push(projectName);
  updateProjectMenu(projectList);
  updateLocalStorage(projectList);
};

//handling the logic of deleting projects
const deleteProject = (project) => {
  //search the index of the project
  const indexOfProject = projectList.indexOf(project);
  if (indexOfProject >= 0 && indexOfProject < projectList.length) {
    //eliminates the project from the array
    projectList.splice(indexOfProject, 1);
    updateProjectMenu(projectList);
    updateLocalStorage(projectList);
  }
};

//EXPORTS//
export { projectList, addNewProject, deleteProject };
