import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit, validator }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._validator = validator;
    this._form = this._popupElement.querySelector(".popup__form");
    this._inputList = Array.from(this._form.querySelectorAll("input"));
  }

  _getInputValues() {
    const values = {};
    this._inputList.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  getForm() {
    return this._form;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
      this._handleFormSubmit(inputValues);

      this._form.reset();

      if (this._validator) {
        this._validator.resetValidation();
      }

      this.close();
    });
  }

  close() {
    super.close();
  }
}

export default PopupWithForm;
