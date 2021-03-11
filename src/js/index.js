const app = new Album('#app');
const loading = new Loading();
const breadcrumb = new Breadcrumb();
const node = new Node();


app.init();

// loading.on();
// loading.off();

breadcrumb.setBreadcrumb();
breadcrumb.editBreadcrumb();

node.init();

