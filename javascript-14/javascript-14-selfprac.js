const root = document.getElementById("root");

class Element {
  constructor(tagName, attribute, className, where, text) {
    this.element = document.createElement(tagName);
    if (this.element) {
      this.element.setAttribute(attribute, className);
    }
    if (where) {
      where.appendChild(this.element);
    }
    if (text) {
      this.element.innerHTML = text;
    }
  }
  set tagName(value) {
    if (typeof value === "string") {
      this._tagName = value;
    }
  }
  getElement() {
    return this.element;
  }
}

const divtest = new Element("div", "class", "test", root, "class 테스트");

// const divTag = new ConstructionTest(
//   "div",
//   "class",
//   "classtest",
//   "root",
//   "안녕하세요."
// );

// console.log(divTag);

// const changedData = JSON.stringify(divTag);
// console.log(changedData);
