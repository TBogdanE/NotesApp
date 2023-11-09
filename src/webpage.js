import { createProject, projectList } from "./createProject";
//import {createTask} from './createTask';

const menuBtnAll = document.getElementById("menu-btn-all");
const menuBtnToday = document.getElementById("menu-btn-today");
const menuBtnTommorow = document.getElementById("menu-btn-tommorow");
const menuBtnWeek = document.getElementById("menu-btn-week");
const menuBtnMonth = document.getElementById("menu-btn-month");

const changeMenu = () => {
  menuBtnAll.addEventListener("click", () => {
    //showAll();
  });

  menuBtnToday.addEventListener("click", () => {
    //showToday();
  });

  menuBtnTommorow.addEventListener("click", () => {
    //showTommorow();
  });

  menuBtnWeek.addEventListener("click", () => {
    //showWeek();
  });

  menuBtnMonth.addEventListener("click", () => {
    //showMonth();
  });
};

const renderPage = () => {
  //changeMenu();
  //showAll();
};

const clearDisplay = (container) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  //const content = document.getElementById(id);
  //content.textContent = "";
};

export { renderPage, clearDisplay };
