class Finder {
  constructor() {
    this.parentElement = document.querySelector('#app');
    this.nodeWrapperElement = Finder.createNodeWrapperElement();
    this.backBtnElement = Finder.createBackBtnElement();
    // this.nodeElements = Finder.createNodeElement();
    this.nodeElements = null;
    this.nodes = [];

    this.init();
  }

  init() {
    this.parentElement.appendChild(this.nodeWrapperElement);
    this.nodeWrapperElement.appendChild(this.backBtnElement);
    
    // todo-heeo. clone 말고...여기서 말고...ㅜㅜ
    // this.nodeWrapperElement.appendChild(this.nodeElements);
    // for(let i = 0; i < 7; i++) {
    //   this.nodeWrapperElement.appendChild(this.nodeElements.cloneNode(true));
    // }
  }

  static createNodeWrapperElement() {
    const nodeWrapper = document.createElement('div');
    
    nodeWrapper.classList.add('cont_node');

    return nodeWrapper;
  }

  static createBackBtnElement() {
    const backBtnWrapper = document.createElement('div');
    const backBtn = document.createElement('button');
    const backBtnText = document.createTextNode('뒤로가기');

    backBtnWrapper.classList.add('node');
    backBtn.classList.add('btn_back');
    backBtn.appendChild(backBtnText);
    backBtnWrapper.appendChild(backBtn);

    return backBtnWrapper;
  }

  // todo-heeo. 진리의 원천 조사..!
  static nodeWrapperElement(albumData = []) {
    //todo-heeo. albumData 연결
    
    let nodeElement = document.createElement('div');
    const nodeName = document.createElement('span');
    
    // let nodeImg = '';
    // let nodeName = '';

    nodeElement.classList.add('node');
    nodeName.classList.add('name_node');

    nodeElement.innerHTML = '<img src="./assets/img_folder.png" alt=""><span class="name_node">파일명</span>';

    // for(let i=0; i < albumData.length; i++) {
    //   albumImg = albumData[i].type === 'DIRECTORY' ? './../../../assets/img_folder.png' : albumData[i].filePath;
    // }

    return nodeElement;
  }

  set(files = []) {
    this.nodes = files;
  }

  render() {
    const fileElements = this.nodes.map(node => {
      const imageSource = node.type  === 'DIRECTORY' ? './assets/img_folder.png' : './assets/img_file.png';

      return `
        <div class="node">
          <img src="${imageSource}" alt=""/>
          <span class="name_node">${node.name}</span>
        </div>
      `
    }).join('');
    this.nodeWrapperElement.innerHTML = fileElements;
  }
}