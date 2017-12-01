import VueRouter from './install'
import BarRouter from './bar.router'
import WebviewRouter from './webview.router'

const routes = [
    ...BarRouter,
    ...WebviewRouter
]
Vue.use(VueRouter, routes)