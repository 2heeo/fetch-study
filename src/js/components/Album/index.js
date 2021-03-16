class Album {
  constructor (appSelector) {
    this.finder = new Finder();
    this.breadcrumb = new Breadcrumb();
    this.loading = new Loading();
    this.imageViewer = null;
    
    this.appElement = document.querySelector(appSelector);
  }

  // async-await 이 사용되는 함수 fetchAlbumFiles를 쓰려면
  // 사용하는 곳에서도 async-await를 써야한다.
  // 안그러면 데이터가 아니라 Promise가 반환됨
  async init() {
    // before
    // window.api.fetchAlbumFiles()
    // .then((responseBody) => {
    //   console.log(responseBody);
    // });

    // after
    this.loading.on();

    const responseBody = await window.api.fetchAlbumFiles();
    
    this.finder.set(responseBody);
    this.loading.off();
    this.render();
  }

  render() {
    this.finder.render();
  }
}