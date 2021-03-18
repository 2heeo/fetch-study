class Album {
  constructor (appSelector) {
    this.finder = new Finder();
    this.breadcrumb = new Breadcrumb();
    this.loading = new Loading();
    this.imageViewer = null;

    this.requestURL = 'https://zl3m4qq0l9.execute-api.ap-northeast-2.amazonaws.com/dev';
    this.fileId = '';
    
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
    // this.loading.on();
    // const responseBody = await window.api.fetchAlbumFiles(requestURL);
    // this.finder.set(responseBody);
    // this.loading.off();

    this.render(this.requestURL);
  }

  async render(requestURL) {
    this.loading.on();
    const responseBody = await window.api.fetchAlbumFiles(requestURL);
    this.finder.set(responseBody);
    this.loading.off();

    this.breadcrumb.render(responseBody);
    this.finder.render();

    this.clickDirectory(responseBody);
  }

  isParentsNull(responseBody) {
    const parentItems = responseBody.filter(item => item.parent === null);
    
    console.log(`부모가 없냐? ${parentItems.length !== 0}`);
    return (parentItems.length !== 0);
  }

  reset() {
    this.appElement.innerHtml = '';
  }

  clickDirectory(responseBody) {
    const nodes = this.appElement.querySelectorAll('.node');
    let requestURL = this.requestURL; // todo-heeo. 변수명 고치기
    let clickedDirId = '';

    this.appElement.addEventListener('click', (event) => {      
      const path = event.path;

      for(let i = 0; i < path.length; i ++) {
        // 뒤로가기 버튼 클릭
        if(path[i].classList.contains('btn_back')){ // 뒤로가기 버튼 클릭한 경우
          requestURL = this.isParentsNull(responseBody) ? requestURL : `${this.requestURL}/${path[i].parent}`; // parent가 null 이면 이전 url 유지, 아니면 /${새로운 id}
        
          console.log(33, this.isParentsNull(responseBody));
          this.isParentsNull(responseBody) ? console.log(1, requestURL) : console.log(2, requestURL);
          break;
        }
        // 디렉토리/파일 클릭
        else if(path[i].classList.contains('node')) { // 디렉토리나 파일 클릭시
          // 상위폴더 없으면(ROOT) 뒤로가기버튼 없으니까 클릭한 노드 인덱스와 동일한 api 데이터 선택, 아니면 뒤로가기버튼 인덱스 포함해서 +1
          const clickedDirIndex = this.isParentsNull(responseBody) ? Array.from(nodes).indexOf(path[i]) : Array.from(nodes).indexOf(path[i]) + 1;

          clickedDirId = `${responseBody[clickedDirIndex].id}`; // 클릭한 노드의 id
          requestURL = `${this.requestURL}/${clickedDirId}`;

          console.log(`id = ${clickedDirId}`);
          console.log(responseBody[clickedDirIndex]);
          console.log(requestURL);
          break;
        } 
      }      
      this.reset();
      this.render(requestURL);
    });
  }
}