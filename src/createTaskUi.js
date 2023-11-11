import {
  showImportant,
  showAll,
  showToday,
  showTomorrow,
  showWeek,
  showMonth,
  activeMenuBtn,
  clearDisplay,
} from "./webpage";
import { createNewNote } from "./createTask";

//creates button that is used for creating new notes
const addNewNoteBtn = (project) => {
  const main = document.getElementById("main");
  const topMenu = document.createElement("div");
  topMenu.id = "main-create-new-note-header";
  const newNoteBtn = document.createElement("button");
  newNoteBtn.id = "main-create-new-note-btn";
  newNoteBtn.textContent = "+ Create new note";
  //event listener that triggers the UI that takes input for the notes
  newNoteBtn.addEventListener("click", () => {
    //creates new card UI that takes new note info
    createNewNoteCardUi(project);
  });
  main.appendChild(topMenu);
  topMenu.appendChild(newNoteBtn);
};

//creates the UI for the new note inputs
const createNewNoteCardUi = (project) => {
  const main = document.getElementById("main");
  const card = document.createElement("div");
  card.id = "new-note-card-ui";
  const cardTitle = document.createElement("div");
  cardTitle.id = "new-note-card-ui-title";
  cardTitle.textContent = "Add a new note";
  const form = document.createElement("form");
  form.id = "new-note-card-ui-form";
  const titleInput = document.createElement("input");
  titleInput.id = "new-note-card-ui-title-input";
  titleInput.classList.add("new-note-card-ui-input");
  titleInput.type = "text";
  titleInput.placeholder = "Title";
  titleInput.name = "new-note-label";
  const descriptionInput = document.createElement("textarea");
  descriptionInput.id = "new-note-card-ui-description-input";
  descriptionInput.classList.add("new-note-card-ui-input");
  descriptionInput.placeholder = "Description";
  const cardBox = document.createElement("div");
  cardBox.id = "new-note-card-ui-box";
  const important = document.createElement("input");
  important.id = "new-note-card-ui-important";
  important.type = "checkbox";
  important.value = "false";
  important.addEventListener("click", () => {
    important.value = "false" ? "true" : "false";
  });
  const date = document.createElement("input");
  date.id = "new-note-card-ui-add-date";
  date.type = "date";
  const color = document.createElement("input");
  color.id = "new-note-card-ui-color";
  color.value = "#7eaaa1";
  color.type = "color";
  const submitButton = document.createElement("button");
  submitButton.textContent = "Submit";
  submitButton.id = "new-note-card-ui-submit";

  main.appendChild(card);
  card.appendChild(cardTitle);
  card.appendChild(form);
  form.appendChild(titleInput);
  form.appendChild(descriptionInput);
  form.appendChild(cardBox);
  cardBox.appendChild(important);
  cardBox.appendChild(date);
  cardBox.appendChild(color);
  form.appendChild(submitButton);

  // event listener that procees with the note creation
  const newNoteSubmitButtonListener = (event) => {
    //prevents the refresh of the page
    event.preventDefault();
    //creates the new note with the user inputs
    createNewNote(
      project,
      titleInput.value,
      descriptionInput.value,
      important.value,
      date.value,
      color.value
    );
    updateNotesMenu(project);
    titleInput.value = "";
    descriptionInput.value = "";
    color.value = "#7eaaa1";
    card.classList.add("hidden");
    submitButton.removeEventListener("click", newNoteSubmitButtonListener);
  };
  submitButton.addEventListener("click", newNoteSubmitButtonListener);
};

//creates the UI for the card
const createNoteCard = (note, projects) => {
  const noteCard = document.createElement("div");
  noteCard.classList.add("note-card");
  noteCard.style.borderColor = note.color;
  noteCard.appendChild(createCardDoneBtn(note));
  noteCard.appendChild(createCardElements("note-card-title", note.title));
  noteCard.appendChild(createCardElements("note-card-text", note.text));
  noteCard.appendChild(
    createCardElements("note-card-important", note.important)
  );
  noteCard.appendChild(createCardElements("note-card-date", note.date));
  noteCard.appendChild(createCardEditBtn(note));
  noteCard.appendChild(createCardDeleteBtn(note, projects));
  return noteCard;
};

//for a better organisation, all the content of the note card
//will be created using this function
const createCardElements = (cls, text) => {
  const paragraph = document.createElement("p");
  const txt = document.createElement("div");
  txt.classList.add(cls);
  paragraph.textContent = text;
  txt.appendChild(paragraph);
  return txt;
};

//creates the button that toggles if user did or didn't finish the task
const createCardDoneBtn = (note) => {
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("note-card-btn-container");
  const btn = document.createElement("button");
  btn.classList.add("note-card-btn");
  toggleDoneNote(btn, note);
  btn.addEventListener("click", () => {
    note.doneBtn();
    toggleDoneNote(btn, note);
  });
  btnContainer.appendChild(btn);
  return btnContainer;
};

const toggleDoneNote = (btn, note) => {
  if (note.done) {
    btn.style.backgroundColor = "green";
  } else {
    btn.style.backgroundColor = "transparent";
  }
};

//creates the button that let user edit the note content
const createCardEditBtn = (note) => {
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("note-card-btn-container");
  const btn = document.createElement("button");
  btn.classList.add("note-card-btn");
  btn.addEventListener("click", () => {
    note.editNote(note);
  });
  btnContainer.appendChild(btn);
  return btnContainer;
};

//creates the button that deletes the note
const createCardDeleteBtn = (note, project) => {
  const btnContainer = document.createElement("div");
  btnContainer.classList.add("note-card-btn-container");
  const btn = document.createElement("button");
  btn.classList.add("note-card-btn");
  btn.addEventListener("click", () => {
    note.deleteNote(project);
  });
  btnContainer.appendChild(btn);
  return btnContainer;
};

//display the notes of a selected project
const updateNotesMenu = (projects) => {
  const main = document.getElementById("main");
  let cardSection = document.getElementById("main-notes-sct");

  //checks if cardSection isn't already created
  if (!cardSection) {
    cardSection = document.createElement("div");
    cardSection.id = "main-notes-sct";
    main.appendChild(cardSection);
  }

  clearDisplay(cardSection);
  main.appendChild(cardSection);

  //displays all the notes inside a project
  switch (activeMenuBtn.textContent) {
    case "Important":
      showImportant();
      break;
    case "All":
      showAll();
      break;
    case "Today":
      showToday();
      break;
    case "Tomorrow":
      showTomorrow();
      break;
    case "Next week":
      showWeek();
      break;
    case "Next month":
      showMonth();
      break;
    default:
      for (let note of projects.noteList) {
        cardSection.appendChild(createNoteCard(note, projects));
      }
      break;
  }
};

export { createNewNoteCardUi, addNewNoteBtn, updateNotesMenu, createNoteCard };
