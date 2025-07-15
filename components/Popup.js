class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
    this._popupCloseBtn = this._popupElement.querySelector(".popup__close");

    // ✅ Bind the escape handler
    this._handleEscapeClose = this._handleEscapeClose.bind(this);
  }

  open() {
    this._popupElement.classList.add("popup_visible");
    document.addEventListener("keydown", this._handleEscapeClose); // ✅ use same event for add/remove
  }

  close() {
    this._popupElement.classList.remove("popup_visible");
    console.log("close method called");
    document.removeEventListener("keydown", this._handleEscapeClose);
  }

  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      this.close(); // ✅ actually close it
    }
  }

  setEventListeners() {
    // ✅ Close when clicking close button
    this._popupCloseBtn.addEventListener("click", () => {
      this.close();
    });

    // ✅ Optional: close on clicking overlay
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (evt.target === this._popupElement) {
        this.close();
      }
    });
  }
}

export default Popup;
