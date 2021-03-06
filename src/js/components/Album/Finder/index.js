class Finder {
  constructor() {
    this.parentElement = document.querySelector('#app');
    this.nodeWrapperElement = Finder.createNodeWrapperElement();
    // this.nodeElements = Finder.createNodeElement();
    this.nodeElements = null;
    this.nodes = [];

    this.init();
  }

  init() {
    this.parentElement.appendChild(this.nodeWrapperElement);
  }

  static createNodeWrapperElement() {
    const nodeWrapper = document.createElement('div');
    
    nodeWrapper.classList.add('cont_node');

    return nodeWrapper;
  }

  // todo-heeo. 진리의 원천 조사..!
  static nodeWrapperElement(albumData = []) {
    let nodeElement = document.createElement('div');
    const nodeName = document.createElement('span');
    
    nodeElement.classList.add('node');
    nodeName.classList.add('name_node');

    nodeElement.innerHTML = '<img src="./assets/img_folder.png" alt=""><span class="name_node">파일명</span>';

    return nodeElement;
  }

  set(files = []) {
    this.nodes = files;
  }

  render() {
    const backBtnElement = '<div class="node"><button class="btn_back">뒤로가기</button></div>';

    const fileElements = this.nodes.map(node => {
      const imageSource = node.type  === 'DIRECTORY' ? './assets/img_folder.png' : './assets/img_file.png';

      return `
        <div class="node">
          <img src="${imageSource}" alt=""/>
          <span class="name_node">${node.name}</span>
        </div>
      `
    }).join('');

    // todo-heeo. breadcrumb의 depth에 따라 뒤로가기 버튼 노출 유무 제어
    this.nodeWrapperElement.innerHTML = backBtnElement + fileElements;
  }
}