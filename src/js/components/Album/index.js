class Album {
  constructor (appSelector) {
    this.node = [];
    this.breadcrumb = [];
    
    this.appElement = document.querySelector(appSelector);

    console.log(this.appElement);
  }

  init() {
    this.render();
  }

  render() {
    this.appElement.innerHTML = '<div>Album</div>';
  }
}