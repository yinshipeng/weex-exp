import { getBasePath, objectToUrlParams, paramsToObject, isString, isObject } from '../utils'
import { isNotEmpty } from '../utils/index'
const navigator = weex.requireModule('navigator')

/**
 * 所有视图的存放路径
 * @type {string}
 */
const basePath = getBasePath() + '/views'

/**
 * 拼接完整路径后的路由数组
 * @returns {Array}
 */
const getAllRoutes = function (routes) {
    return routes.map(function (route) {
        return {
            path: route.path,
            component: basePath + route['component']
        }
    })
}

/**
 * 获取目标路由地址
 * @param path
 * @returns {string}
 */
const getTargetRouter = function (path, routes) {
    let targetRoute = getAllRoutes(routes).filter(function (route) {
        return route.path == path
    })
    return targetRoute.length > 0 ? targetRoute[0].component : ''
}

/**
 * 获取最终目标URL
 * @param path
 * @param query
 * @returns {string}
 */
const getTargetURL = function (path, routes) {
    let targetPath = ''
    let query = {}
    if(isString(path)){
        targetPath = path
    }else if(isObject(path) && path.hasOwnProperty('path')){
        targetPath = path.path
        if(path.hasOwnProperty('query')){
            query = path.query
        }
    }else{
        return targetPath
    }
    let URL = getTargetRouter(targetPath, routes)
    if(isNotEmpty(query)){
        URL = URL + objectToUrlParams(query)
    }
    return URL
}

/**
 * 获取路由对象
 * @param routes
 * @returns {{push: (function(*=)), back: (function()), query: Object}}
 */
const getVueRouter = function (routes) {
    return {
        push(path){
            let targetURL = getTargetURL(path, routes)
            if(isNotEmpty(weex.config.env.rem) && location.href.indexOf('?page') == -1){
                targetURL = '?page=' + getTargetURL(path, routes)
            }
            navigator.push({
                url: targetURL,
                animated: 'true'
            })
        },
        back(){
            navigator.pop({
                animated: 'true'
            })
        },
        query: paramsToObject(weex.config.bundleUrl)
    }
}

/**
 * 插件必须有一个install(Vue,options)方法，其中options可选
 * @param Vue
 */
const install = function (Vue, routes) {
    Vue.prototype.$router = getVueRouter(routes)
}

export default install