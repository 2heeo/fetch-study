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

    const requestURL = "https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev";
    const responseBody = await window.api.fetchAlbumFiles(requestURL);

    this.finder.set(responseBody);
    this.loading.off();
    this.render();

    console.log(responseBody);

    this.getFileId(responseBody);
  }

  getFileId(responseBody) {
    const nodes = this.appElement.querySelector('.node');

    this.appElement.addEventListener('click', nodes, (e) => {
      const currentTarget = e.currentTarget;

      console.log(11, currentTarget);

      return responseBody[node.indexof(currentTarget)];
    });
  }

  render() {
    this.breadcrumb.render();
    this.finder.render();
  }
}