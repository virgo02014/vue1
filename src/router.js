module.exports = function (router) {
    router.map({
        '/red': {
            name: 'red',
            component: require('./views/red.vue')
        },
        '/green': {
            name: 'green',
            component: require('./views/green.vue')
        }
    })
}
