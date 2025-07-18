class Todo {
  constructor(data, selector, handleCheck, handleDelete) {
    this._data = data;
    this._templateElement = document.querySelector(selector);
    this._handleCheck = handleCheck;
    this._handleDelete = handleDelete;
  }

  _setEventListeners() {
    this._todoCheckboxEl.addEventListener("change", () => {
      this._data.completed = !this._data.completed;
      this._handleCheck(this._data.completed);
    });

    this._todoDeleteBtn.addEventListener("click", () => {
      if (this._data.completed) {
        this._handleCheck(false);
      }
      this._todoElement.remove();
      this._handleDelete();
    });
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    const label = this._todoElement.querySelector(".todo__label");

    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;

    if (label) {
      label.setAttribute("for", `todo-${this._data.id}`);
    }
  }

  getView() {
    this._todoElement = this._templateElement.content
      .querySelector(".todo")
      .cloneNode(true);

    const todoNameEl = this._todoElement.querySelector(".todo__name");
    const todoDateEl = this._todoElement.querySelector(".todo__date");
    this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

    todoNameEl.textContent = this._data.name;

    const dueDate = new Date(this._data.date);
    if (!isNaN(dueDate)) {
      todoDateEl.textContent = `Due: ${dueDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }

    this._generateCheckboxEl();
    this._setEventListeners();

    return this._todoElement;
  }
}

export default Todo;
