class Loading {
  constructor(loadingSelector) {
    this.loadingElement = document.querySelector(loadingSelector);
  }

  on() {
    this.loadingElement.classList.add('on');
  }

  off() {
    this.loadingElement.classList.remove('on');
  }
}