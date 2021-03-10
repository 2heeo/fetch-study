class Loading {
  constructor(loadingSelector) {
    this.loadingElement = document.querySelector(loadingSelector);
  }

  on() {
    this.loadingElement.style.display = 'block';
  }

  off() {
    this.loadingElement.style.display = 'none';
  }
}