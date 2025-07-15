import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

document.addEventListener("DOMContentLoaded", () => {
  const addTodoButton = document.querySelector(".button_action_add");
  const addTodoForm = document.querySelector("#add-todo-popup .popup__form");

  const newTodoValidator = new FormValidator(validationConfig, addTodoForm);
  newTodoValidator.enableValidation();

  const todoCounter = new TodoCounter(initialTodos, ".counter__text");

  const handleCheck = (completed) => {
    todoCounter.updateCompleted(completed);
  };

  const handleDelete = () => {
    todoCounter.updateTotal(false);
  };

  const generateTodo = (data) => {
    const todo = new Todo(data, "#todo-template", handleCheck, handleDelete);
    return todo.getView();
  };

  const section = new Section({
    items: initialTodos,
    renderer: (item) => {
      const todoElement = generateTodo(item);
      section.addItem(todoElement);
    },
    containerSelector: "todos__list",
  });

  section.renderItems();

  const addTodoPopup = new PopupWithForm({
    popupSelector: "#add-todo-popup",
    handleFormSubmit: (formData) => {
      const { name, date } = formData;

      const parsedDate = new Date(date);
      parsedDate.setMinutes(
        parsedDate.getMinutes() + parsedDate.getTimezoneOffset()
      );

      const id = uuidv4();
      const values = { id, name, date: parsedDate, completed: false };

      const todoElement = generateTodo(values);
      section.addItem(todoElement);
      todoCounter.updateTotal(true);

      addTodoPopup.close();
    },
    validator: newTodoValidator,
  });

  addTodoPopup.setEventListeners();

  addTodoButton.addEventListener("click", () => {
    addTodoPopup.open();
  });
});
