import {addNewProject} from './createProject';

function createNewProjectUi() {
  const content = document.createElement("div");
  content.id = "main-new-project-ui";
  
  const form = document.createElement("form");

  const formLabel = document.createElement("label");
  formLabel.textContent = "Name: ";
  formLabel.id = "main-new-project";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.name = "a";

  const submitButton = document.createElement("input");
  submitButton.type = "submit";
  submitButton.value = "Submit";
  submitButton.addEventListener('click', (event) => {
    event.preventDefault()
    addNewProject(nameInput.value);
  });

  form.appendChild(formLabel);
  form.appendChild(nameInput);
  form.appendChild(submitButton);
  content.appendChild(form);
  main.appendChild(content);

  return content;
}

export { createNewProjectUi };
