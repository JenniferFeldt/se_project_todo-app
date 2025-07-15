import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector); // ✅ pass selector string directly
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupElement.querySelector(".popup__form");
  }

  // ✅ Collect input values into an object
  _getInputValues() {
    const inputs = Array.from(this._form.querySelectorAll("input"));
    const values = {};
    inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  // ✅ Add submit listener + parent close icon / overlay listener
  setEventListeners() {
    super.setEventListeners(); // call base class to set close button and overlay listener

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      this._handleFormSubmit(inputValues);
    });
  }

  // ✅ Reset form on close
  close() {
    super.close(); // call base close method
    this._form.reset(); // reset the form
  }
}

export default PopupWithForm;
