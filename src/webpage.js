import {projectList} from './createProject';
//import {createTask} from './createTask';

function changeMenu() {
    const menuBtnAll = document.getElementById('menu-btn-all');
    const menuBtnToday = document.getElementById('menu-btn-today');
    const menuBtnTommorow = document.getElementById('menu-btn-tommorow');
    const menuBtnWeek = document.getElementById('menu-btn-week');
    const menuBtnMonth = document.getElementById('menu-btn-month');
    
    menuBtnAll.addEventListener('click', () => {
        showAll();
    });

    menuBtnToday.addEventListener('click', () => {
        showToday();
    });

    menuBtnTommorow.addEventListener('click', () => {
        showTommorow();
    });

    menuBtnWeek.addEventListener('click', () => {
        showWeek();
    });

    menuBtnMonth.addEventListener('click', () => {
        showMonth();
    });
}

function showAll {

}

function renderPage() {
    showAll();
}

export { renderPage };
