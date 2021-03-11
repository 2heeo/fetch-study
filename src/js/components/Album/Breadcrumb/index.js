class Breadcrumb {
  constructor() {
    this.parentsElement = document.querySelector('#app');
    this.breadcrumbElement = Breadcrumb.createBreadcrumbElement();
  }

  static createBreadcrumbElement() {
    const breadcrumbWrapper = document.createElement('div');
    const breadcrumb = document.createElement('strong');
    
    breadcrumbWrapper.classList.add('breadcrumb');
    breadcrumb.classList.add('txt_breadcrumb');
    breadcrumbWrapper.appendChild(breadcrumb);

    return breadcrumbWrapper;
  }

  setBreadcrumb() {
    this.parentsElement.appendChild(this.breadcrumbElement);
  }

  editBreadcrumb() {
    const breadcrumbText = 'ROOT'; // 추후 변경
    
    this.breadcrumbElement.querySelector('.txt_breadcrumb').innerHTML = breadcrumbText;
  }
}