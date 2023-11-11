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

const renderPage = () => {
  showAll();
  changeMenu();
};

const changeMenu = () => {
  menuBtnImportant.addEventListener("click", () => {
    setActiveBtn(menuBtnImportant);
    showImportant();
  });

  menuBtnAll.addEventListener("click", () => {
    setActiveBtn(menuBtnAll);
    showAll();
  });

  menuBtnToday.addEventListener("click", () => {
    setActiveBtn(menuBtnToday);
    showToday();
  });

  menuBtnTommorow.addEventListener("click", () => {
    setActiveBtn(menuBtnTommorow);
    showTomorrow();
  });

  menuBtnWeek.addEventListener("click", () => {
    setActiveBtn(menuBtnWeek);
    showWeek();
  });

  menuBtnMonth.addEventListener("click", () => {
    setActiveBtn(menuBtnMonth);
    showMonth();
  });
};

const showImportant = () => {
  const cardSection = renderMenuContains();

  for (let project of projectList) {
    for (let note of project.noteList) {
      if (note.important == "true") {
        cardSection.appendChild(createNoteCard(note, project));
      }
    }
  }
};

const showAll = () => {
  const cardSection = renderMenuContains();

  for (let project of projectList) {
    for (let note of project.noteList) {
      cardSection.appendChild(createNoteCard(note, project));
    }
  }
};

const showToday = () => {
  renderMenuContains();
};

const showTomorrow = () => {
  renderMenuContains();
};

const showWeek = () => {
  renderMenuContains();
};

const showMonth = () => {
  renderMenuContains();
};

const setActiveBtn = (newActiveBtn) => {
  activeMenuBtn.classList.remove("active");
  activeMenuBtn = newActiveBtn;
  activeMenuBtn.classList.add("active");
  return activeMenuBtn;
};

const renderMenuContains = () => {
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
  return cardSection;
};

const clearDisplay = (container) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  //const content = document.getElementById(id);
  //content.textContent = "";
};

export {
  showImportant,
  showAll,
  showToday,
  showTomorrow,
  showWeek,
  showMonth,
  activeMenuBtn,
  renderPage,
  clearDisplay,
  setActiveBtn,
};
