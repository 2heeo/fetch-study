class Breadcrumb {
  constructor() {
    this.parentsElement = document.querySelector('#app');
  }

  render(responseBody = [], dirName = '') {
    // 미완성..Album의 render() 에서 ..dirName 관련 지저분..어찌 처리 할 것인가..
    const breadcrumbTxt = responseBody[0].parent === null ?  'ROOT' : 'ROOT' + ` > ${dirName}`;
    const breadcrumbElement = `<div class="breadcrumb"><strong class="txt_breadcrumb">${breadcrumbTxt}</strong></div>`;

    this.parentsElement.insertAdjacentHTML('afterbegin', breadcrumbElement);
  }
}