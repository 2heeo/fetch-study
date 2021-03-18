const findTargetElement = ({path, className}) => {
  let clickedFile = null;
  
  path.forEach((element) => {
    if(element?.classList?.contains('node')) {
      clickedFile = element;
    }
  });

  return clickedFile;
};
class Album {
  constructor (appSelector) {
    this.finder = new Finder();
    this.breadcrumb = new Breadcrumb();
    this.loading = new Loading();
    this.imageViewer = null;

    this.fileId = '';
    
    this.appElement = document.querySelector(appSelector);
  }

  // async-await 이 사용되는 함수 fetchAlbumFiles를 쓰려면
  // 사용하는 곳에서도 async-await를 써야한다.
  // 안그러면 데이터가 아니라 Promise가 반환됨
  async init() {
    this.bindEvents();
    await this.fetchFinder();
  }

  bindEvents() {
    this.finder.nodeWrapperElement.addEventListener('click', async (event) => {
      const {path} = event;

      const clickedFile = findTargetElement({path, className: 'node'});
      // console.log(clickedFile);

      if(!clickedFile) { // 1. null (node클래스를 가진 엘리먼트가 path에 없으면 null이고 return시킴)
        return;
      }

      // (그외) 2. data-id 가 있는 경우 > 폴더나 파일
      // (그외) 3. data-id 가 없는 경우 > 뒤로가기 버튼

      const nodeId = clickedFile.dataset.id;
      // console.log(nodeId);
      await this.fetchFinder(nodeId);
    });
  }

  async fetchFinder(nodeId = '') {
    // before
    // window.api.fetchAlbumFiles()
    // .then((responseBody) => {
    //   console.log(responseBody);
    // });

    // after
    this.loading.on();
    const responseBody = await window.api.fetchAlbumFiles(nodeId);
    this.finder.set(responseBody);
    this.render();
    this.loading.off();
  }

  render() {
    this.finder.render();
  }

  isParentsNull(responseBody) {
    const parentItems = responseBody.filter(item => item.parent === null);
    
    console.log(`부모가 없냐? ${parentItems.length !== 0}`);
    return (parentItems.length !== 0);
  }

  reset() {
    this.appElement.innerHtml = '';
  }
}