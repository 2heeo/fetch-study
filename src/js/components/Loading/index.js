class Loading {
  constructor(loadingSelector) {
    this.loadingElement = document.querySelector(loadingSelector);

    this.setLoading();
  }

  setLoading() {
    let viewPortWidth;
    let viewPortHeight;

    // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight
    if (typeof window.innerWidth != 'undefined') {
      viewPortWidth = window.innerWidth,
      viewPortHeight = window.innerHeight
    }

    // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
    else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {
      viewPortWidth = document.documentElement.clientWidth,
      viewPortHeight = document.documentElement.clientHeight
    }

    // older versions of IE
    else {
      viewPortWidth = document.getElementsByTagName('body')[0].clientWidth,
      viewPortHeight = document.getElementsByTagName('body')[0].clientHeight
    }

    this.loadingElement.setAttribute('style', `width:${viewPortWidth}px;height:${viewPortHeight}px`);
    console.log(viewPortWidth);
    console.log(viewPortHeight);
  }

  on() {
    this.loadingElement.classList.add('on');
  }

  off() {
    this.loadingElement.classList.remove('on');
  }
}