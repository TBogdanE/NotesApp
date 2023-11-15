import { projectList } from "./createProject";
import { createNewProjectCardUi } from "./createProjectUi";
import { createNoteCard } from "./createTaskUi";
//date formatting library
import {
  isToday,
  isTomorrow,
  isThisWeek,
  isThisMonth,
  parseISO,
} from "date-fns";
//import {createTask} from './createTask';

//starts the page showing all the notes
const renderPage = () => {
  pageInitialisation();
  showAll();
};

let activeMenuBtn;

//initialise all the elements on the page
const pageInitialisation = () => {
  const menuBtnImportant = document.getElementById("menu-btn-important");
  const menuBtnAll = document.getElementById("menu-btn-all");
  const menuBtnToday = document.getElementById("menu-btn-today");
  const menuBtnTommorow = document.getElementById("menu-btn-tommorow");
  const menuBtnWeek = document.getElementById("menu-btn-week");
  const menuBtnMonth = document.getElementById("menu-btn-month");
  const createProjectBtn = document.getElementById("menu-btn-addproject");
  createProjectBtn.addEventListener("click", createNewProjectCardUi);
  activeMenuBtn = menuBtnAll;
  changeMenu(
    menuBtnImportant,
    menuBtnAll,
    menuBtnToday,
    menuBtnTommorow,
    menuBtnWeek,
    menuBtnMonth
  );
};

//adds event listeners to the menu buttons
const changeMenu = (
  menuBtnImportant,
  menuBtnAll,
  menuBtnToday,
  menuBtnTommorow,
  menuBtnWeek,
  menuBtnMonth
) => {
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

//display's only the notes marked as important
const showImportant = () => {
  const cardSection = renderMenuContains();

  //goes through all the notes from all the projects and check if are important
  for (let project of projectList) {
    for (let note of project.noteList) {

      if (note.important == "true") {
        cardSection.appendChild(createNoteCard(note, project));
      }
    }
  }
};

//display's all the notes
const showAll = () => {
  const cardSection = renderMenuContains();

  for (let project of projectList) {
    for (let note of project.noteList) {
      cardSection.appendChild(createNoteCard(note, project));
    }
  }
};

//display's the notes with today due
const showToday = () => {
  const cardSection = renderMenuContains();
  noteFilter(isToday, cardSection);
};

//display's the notes with tommorow due
const showTomorrow = () => {
  const cardSection = renderMenuContains();
  noteFilter(isTomorrow, cardSection);
};

//display's the notes with this week due
const showWeek = () => {
  const cardSection = renderMenuContains();
  noteFilter(isThisWeek, cardSection);
};

//display's the notes with this month due
const showMonth = () => {
  const cardSection = renderMenuContains();
  noteFilter(isThisMonth, cardSection);
};

//updates which which button is active
const setActiveBtn = (newActiveBtn) => {
  activeMenuBtn.classList.remove("active");
  activeMenuBtn = newActiveBtn;
  activeMenuBtn.classList.add("active");
  return activeMenuBtn;
};

//creates the structure where the notes will be displayed
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

//filters the notes by date
const noteFilter = (time, sct) => {
  for (let project of projectList) {
    for (let note of project.noteList) {
      if (time(parseISO(note.date))) {
        sct.appendChild(createNoteCard(note, project));
      }
    }
  }
};

//clears the content of the display
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
