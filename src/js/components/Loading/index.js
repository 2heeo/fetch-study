class Loading {
  constructor() {
    this.parentsElement = document.querySelector('#app');
    this.loadingElement = Loading.createLoadingElement();
  }

  // todo-heeo. static 매서드와 아닌 매서드 차이 조사
  static createLoadingElement() {    
    const loadingWrapper = document.createElement('div');
    const loadingIcon = document.createElement('span');
    const loadingText = document.createTextNode('로딩중');

    loadingWrapper.classList.add('loading');
    loadingIcon.classList.add('ico_loading');

    loadingIcon.appendChild(loadingText);
    loadingWrapper.appendChild(loadingIcon);

    return loadingWrapper;
  }

  on() {
    this.parentsElement.appendChild(this.loadingElement);
  }

  off() {
    this.parentsElement.removeChild(this.loadingElement);
  }
}