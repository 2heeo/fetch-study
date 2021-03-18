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

  reset() {
    this.parentElement.querySelector('.cont_node').innerHTML = '';
  }

  render() {
    const backBtnElement = '<div class="node"><button class="btn_back">뒤로가기</button></div>';

    const fileElements = this.nodes.map(node => {
      const imageSource = node.type  === 'DIRECTORY' ? './assets/img_folder.png' : './assets/img_image.png';

      return `
        <div class="node" data-id="${node.id}">
          <img src="${imageSource}" alt=""/>
          <span class="name_node">${node.name}</span>
        </div>
      `
    }).join('');

    this.nodeWrapperElement.innerHTML = this.nodes[0].parent === null ? fileElements : backBtnElement + fileElements;
  }
}