class Breadcrumb {
  constructor() {
    this.parentsElement = document.querySelector('#app');
  }

  render() {
    // todo-heeo. breadcrumbTxt 설정 (feat. ">")
    const breadcrumbTxt = 'ROOT';
    const breadcrumbElement = `<div class="breadcrumb"><strong class="txt_breadcrumb">${breadcrumbTxt}</strong></div>`;

    this.parentsElement.insertAdjacentHTML('afterbegin', breadcrumbElement);
  }
}