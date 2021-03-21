class Finder {
  constructor() {
    this.parentElement = document.querySelector('#app');
    this.nodeWrapperElement = Finder.createNodeWrapperElement();
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
      const imageSource = node.type  === 'DIRECTORY' ? './assets/img_folder.png' : './assets/img_image.png';
      const parentId = node.parent === null ? '' : node.parent.id;

      return `
        <div class="node" data-id="${node.id}" data-type="${node.type}" data-parent-id="${parentId}">
          <img src="${imageSource}" alt=""/>
          <span class="name_node">${node.name}</span>
        </div>
      `
    }).join('');

    // 아래 조건 고치기..
    this.nodeWrapperElement.innerHTML = this.nodes[0].parent === null ? fileElements : backBtnElement + fileElements;
  }
}