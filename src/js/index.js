const app = new Album('#app');
const loading = new Loading();
const breadcrumb = new Breadcrumb();
const finder = new Finder();


app.init();

// loading.on();
// loading.off();

breadcrumb.setBreadcrumb();
breadcrumb.editBreadcrumb();

finder.init();

