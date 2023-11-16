import { projectList } from "./createProject";
import { updateProjectMenu } from "./createProjectUi";
import { Note } from "./createTask";

const addToLocalStorage = (projectList) => {
  localStorage.setItem("projectList", JSON.stringify(projectList));
  console.log(localStorage);
};

const removeFromLocalStorage = () => {};

const removeLocalStorage = () => {
  console.log(localStorage);
  localStorage.clear();
  console.log("Local storage deleted");
  console.log(localStorage);
};

const initialLocalStorageCheck = (storageType) => {
  if (!storageAvailable(storageType)) {
    console.error("No local storage available");
  } else {
    checkLocalStorage();
  }
};

const checkLocalStorage = () => {
  if (localStorage.getItem("projectList")) {
    const storedProjectList = JSON.parse(localStorage.getItem("projectList"));
    storedProjectList.forEach((project) => {
      project._noteList.forEach((note) => {
        Object.setPrototypeOf(note, Note.prototype);
      });
    });
    projectList.length = 0;
    projectList.push(...storedProjectList);
    updateProjectMenu(projectList);
  } else {
    console.error("List not found!");
  }
};

const storageAvailable = (type) => {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
};

export {
  initialLocalStorageCheck,
  addToLocalStorage,
  removeFromLocalStorage,
  removeLocalStorage,
  checkLocalStorage,
  storageAvailable,
};
