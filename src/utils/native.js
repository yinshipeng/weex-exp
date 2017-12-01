/**
 * 与native通信的module都写在这里
 */
const native = {}

const install = function () {
    Vue.prototype.$native = native
}

Vue.use(install)
