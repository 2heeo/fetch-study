class Album {
  constructor (appSelector) {
    this.node = [];
    this.breadcrumb = [];
    
    this.appElement = document.querySelector(appSelector);
  }

  init() {
    this.render();

    // 함수 호출
    // console.log(responseBody);
  }

  render() {
    this.appElement.innerHTML = '<div>Album</div>';
  }
}