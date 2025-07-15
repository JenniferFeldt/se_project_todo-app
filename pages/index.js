import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithForm from "../components/PopupWithForm.js";

document.addEventListener("DOMContentLoaded", () => {
  // Button and form references
  const addTodoButton = document.querySelector(".button_action_add");
  const addTodoForm = document.querySelector("#add-todo-popup .popup__form");

  // Generate a single Todo element
  const generateTodo = (data) => {
    const todo = new Todo(data, "#todo-template");
    return todo.getView();
  };

  // Section instance for rendering todos
  const section = new Section({
    items: initialTodos,
    renderer: (item) => {
      const todoElement = generateTodo(item);
      section.addItem(todoElement);
    },
    containerSelector: "todos__list",
  });

  // Render initial todos
  section.renderItems();

  // Popup instance
  const addTodoPopup = new PopupWithForm({
    popupSelector: "#add-todo-popup",
    handleFormSubmit: () => {
      // You can fill this in later
    },
  });

  addTodoPopup.setEventListeners(); // 🔑 Required

  // Open popup on button click
  addTodoButton.addEventListener("click", () => {
    addTodoPopup.open();
  });

  // Enable form validation
  const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
  newTodoValidator.enableValidation();
});
