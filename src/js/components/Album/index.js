class Album {
  constructor (appSelector) {
    this.node = [];
    this.breadcrumb = [];
    
    this.appElement = document.querySelector(appSelector);
  }

  init() {
    this.render();
  }

  render() {
    this.appElement.innerHTML = '<div>Album</div>';
  }
}