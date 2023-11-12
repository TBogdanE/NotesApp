//IMPORTS//
import { updateProjectMenu } from "./createProjectUi";

//VARIABLE DECLARATION
//const main = document.getElementById("main");

let projectList = [];

//class on which other projects will be created
class Project {
  constructor(name) {
    this.name = name;
    this.noteList = [];
  }

  get noteList() {
    return this._noteList;
  }

  set noteList(noteList) {
    this._noteList = noteList;
  }
}

//EVENT LISTENERS//


//FUNCTIONS//
//called from createProjectUi.js, will create a new project and save it to the array
const addNewProject = (name) => {
  const projectName = new Project(name);
  projectList.push(projectName);
  updateProjectMenu(projectList);
  //return projectName;
};

const deleteProject = (project) => {
  const indexOfProject = projectList.indexOf(project);
  if (indexOfProject >= 0 && indexOfProject < projectList.length) {
    projectList.splice(indexOfProject, 1);
    updateProjectMenu(projectList);
  }
};

//EXPORTS//
export { projectList, addNewProject, deleteProject };
