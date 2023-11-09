import { createProject, projectList } from "./createProject";
import { createNoteCard } from "./createTaskUi";
//import {createTask} from './createTask';

const menuBtnImportant = document.getElementById("menu-btn-important");
const menuBtnAll = document.getElementById("menu-btn-all");
const menuBtnToday = document.getElementById("menu-btn-today");
const menuBtnTommorow = document.getElementById("menu-btn-tommorow");
const menuBtnWeek = document.getElementById("menu-btn-week");
const menuBtnMonth = document.getElementById("menu-btn-month");
let activeMenuBtn = menuBtnAll;

const changeMenu = () => {
  const setActiveButton = (newActiveBtn) => {
    activeMenuBtn.classList.remove("active");
    activeMenuBtn = newActiveBtn;
    activeMenuBtn.classList.add("active");
  };

  menuBtnImportant.addEventListener("click", () => {
    setActiveButton(menuBtnImportant);
    showImportant();
  });

  menuBtnAll.addEventListener("click", () => {
    setActiveButton(menuBtnAll);
    showAll();
  });

  menuBtnToday.addEventListener("click", () => {
    setActiveButton(menuBtnToday);
    //showToday();
  });

  menuBtnTommorow.addEventListener("click", () => {
    setActiveButton(menuBtnTommorow);
    //showTommorow();
  });

  menuBtnWeek.addEventListener("click", () => {
    setActiveButton(menuBtnWeek);
    //showWeek();
  });

  menuBtnMonth.addEventListener("click", () => {
    setActiveButton(menuBtnMonth);
    //showMonth();
  });
};

const renderPage = () => {
  showAll();
  changeMenu();
};

const showImportant = () => {
  console.log("Show Important");
  const main = document.getElementById("main");
  let cardSection = document.getElementById("main-notes-sct");

  if (!cardSection) {
    cardSection = document.createElement("div");
    cardSection.id = "main-notes-sct";
    main.appendChild(cardSection);
  }

  clearDisplay(main);
  clearDisplay(cardSection);
  main.appendChild(cardSection);

  for (let project of projectList) {
    for (let note of project.noteList) {
      if (note.important == "true") {
        cardSection.appendChild(createNoteCard(note, project));
      }
    }
  }
};

const showAll = () => {
  console.log("show all");
  const main = document.getElementById("main");
  let cardSection = document.getElementById("main-notes-sct");

  if (!cardSection) {
    cardSection = document.createElement("div");
    cardSection.id = "main-notes-sct";
    main.appendChild(cardSection);
  }

  clearDisplay(main);
  clearDisplay(cardSection);
  main.appendChild(cardSection);

  for (let project of projectList) {
    for (let note of project.noteList) {
      cardSection.appendChild(createNoteCard(note, project));
    }
  }
};

const clearDisplay = (container) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  //const content = document.getElementById(id);
  //content.textContent = "";
};

export { renderPage, clearDisplay };
