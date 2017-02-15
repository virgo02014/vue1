var Vue = require('vue');
var VueRouter = require('vue-router');
var App = require('./app.vue');
Vue.use(VueRouter);
var router = new VueRouter();
require('./router')(router);
router.start(App, '#app');
