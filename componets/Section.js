class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(`.${containerSelector}`);
  }

  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item); // Call renderer for each item
    });
  }

  addItem(element) {
    this._container.append(element); // Append element to container
  }
}

export default Section;
 