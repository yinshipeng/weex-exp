import _ from 'lodash'
/**
 * 根据weex.config动态获取获取服务器地址
 * 这里可以修改js文件服务器地址，供native访问
 * @retrun
 */
export function getBasePath () {
    let bundleUrl = weex.config.bundleUrl;
    const url = bundleUrl.substring(0, bundleUrl.lastIndexOf(':'));
    return url + ':8081';

}

/**
 * object 转 URL 参数
 * {id:1, name:123} => '?id=1&name=123'
 * @param obj
 * @returns {string}
 */
export function objectToUrlParams (obj) {
    let url = '?'
    for (let key in obj) {
        if (obj[key] !== null) {
            url += (key + '=' + encodeURIComponent(obj[key]) + '&')
        }
    }
    return url.substring(0, url.lastIndexOf('&'))
}

/**
 * URL参数转成对象
 * '{str}?name=aa' => {name: 'aa'}
 * @param obj
 * @returns {object}
 */
export function paramsToObject (url) {
    url = url.substring(url.lastIndexOf('?'))
    var result = {};
    if (url.lastIndexOf("?") != -1) {
        var str = url.substr(1)
        var strs = str.split("&")
        for (var i = 0; i < strs.length; i++) {
            result[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1])
        }
    }
    return result
}

/**
 * 非空判断，由于_.Empty([Number|Boolean])为判断为true,故处理一下。
 * @param arg
 * @returns {boolean}
 */
export function isNotEmpty (arg) {
    if(!_.isNaN(arg) && _.isNumber(arg)){
        return true
    }else if(_.isBoolean(arg)){
        return true
    }
    return !_.isEmpty(arg)
}

/**
 * 是否是字符串
 * @param arg
 * @returns {*}
 */
export function isString (arg) {
    return _.isString(arg)
}

/**
 * 是否是对象
 * @param arg
 * @returns {*}
 */
export function isObject (arg) {
    return _.isObject(arg)
}