import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit, validator }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupElement.querySelector(".popup__form");
    this._validator = validator;
  }

  _getInputValues() {
    const inputs = Array.from(this._form.querySelectorAll("input"));
    const values = {};
    inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      this._handleFormSubmit(inputValues);
    });
  }

  open() {
    if (this._validator) {
      this._validator.resetValidation();
    }
    super.open();
  }

  close() {
    super.close();
    this._form.reset();
  }
}

export default PopupWithForm;
