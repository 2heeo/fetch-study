const findTargetElement = ({path, className}) => {
  let clickedFile = null;
  
  path.forEach((element) => {
    if(element?.classList?.contains('node')) {
      clickedFile = element;
    }
  });

  return clickedFile;
};
class Album {
  constructor (appSelector) {
    this.breadcrumb = new Breadcrumb();
    this.finder = new Finder();
    this.loading = new Loading();
    this.imageViewer = null;

    this.fileId = '';
    
    this.appElement = document.querySelector(appSelector);
  }

  async init() {
    this.bindEvents();
    await this.fetchFinder();
  }

  bindEvents() {
    this.finder.nodeWrapperElement.addEventListener('click', async (event) => {
      const {path} = event;
      const clickedFile = findTargetElement({path, className: 'node'});

      if(!clickedFile) {
        return;
      }

      const {id: nodeId, type: nodeType} = clickedFile.dataset;
      
      switch(nodeType) {
        case 'FILE': {
          console.log('clicked file');
          break;
        }
        case 'DIRECTORY': {
          await this.next(nodeId);
          break;
        }
        default: {
          console.log('clicked back button');
          await this.back();
          break;
        }
      }
    });
  }

  async next(nodeId = '') {
    const targetNode = this.finder.nodes.find((node) => node.id === nodeId);
    
    this.breadcrumb.next(targetNode);
    await this.fetchFinder(nodeId);
  }

  async back() {
    this.breadcrumb.back();
    
    const parentNode = this.breadcrumb.getParentNode();
    await this.fetchFinder(parentNode?.id);
  }

  async fetchFinder(nodeId = '') {
    this.loading.on();
    const isRoot= !nodeId;
    const responseBody = await window.api.fetchAlbumFiles(nodeId);
    this.finder.set(responseBody, isRoot);
    this.render();
    this.loading.off();
  }

  openImageViewer() {
    
  }

  render() {
    this.finder.render();
    this.breadcrumb.render();
  }

  reset() {
    this.appElement.innerHtml = '';
  }
}