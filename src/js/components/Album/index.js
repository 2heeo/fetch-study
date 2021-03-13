class Album {
  constructor (appSelector) {
    this.finder = [];
    this.breadcrumb = [];
    
    this.appElement = document.querySelector(appSelector);
  }

  // async-await 이 사용되는 함수 fetchAlbumFiles를 쓰려면
  // 사용하는 곳에서도 async-await를 써야한다.
  // 안그러면 데이터가 아니라 Promise가 반환됨
  async init() {
    this.render();

    const responseBody = await window.api.fetchAlbumFiles();
    console.log(responseBody);

    // window.api.fetchAlbumFiles()
    // .then((responseBody) => {
    //   console.log(responseBody);
    // });
  }

  render() {
    this.appElement.innerHTML = '<div>Album</div>';
  }
}