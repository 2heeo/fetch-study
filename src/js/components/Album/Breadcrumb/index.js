class Breadcrumb {
  constructor() {
    this.parentsElement = document.querySelector('#app');
    this.wrapperElement = Breadcrumb.createBreadcrumbWrapper();
    this.parentsElement.appendChild(this.wrapperElement);

    this.history = [];
  }

  static createBreadcrumbWrapper() {
    const wrapperElement = document.createElement('div');
    wrapperElement.classList.add('breadcrumb');

    return wrapperElement;
  }

  next(node = {}) {
    this.history.push(node);
  }

  back(node = {}) {
    this.history.pop(node);
  }

  getParentNode() {
    return this.history[this.history.length -1];
  }

  render() {
    const ROOT = '<strong class="txt_breadcrumb">ROOT</strong>';
    const historyElement = this.history
      .map((node) => `<strong class="txt_breadcrumb"> &gt; ${node.name}</strong>`)
      .join('');
    this.wrapperElement.innerHTML = ROOT + historyElement;
  }
}