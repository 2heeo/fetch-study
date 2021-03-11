class Node {
  constructor() {
    this.parentsElement = document.querySelector('#app');
    this.nodeWrapperElement = Node.createNodeWrapperElement();
    this.backBtnElement = Node.createBackBtnElement();
    this.nodeElements = Node.createNodeElement();
  }

  init() {
    this.parentsElement.appendChild(this.nodeWrapperElement);
    this.nodeWrapperElement.appendChild(this.backBtnElement);
    
    // todo-heeo. clone 말고...여기서 말고...ㅜㅜ
    // this.nodeWrapperElement.appendChild(this.nodeElements);
    for(let i = 0; i < 7; i++) {
      this.nodeWrapperElement.appendChild(this.nodeElements.cloneNode(true));
    }
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

  static createNodeElement(albumData = []) {
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
}