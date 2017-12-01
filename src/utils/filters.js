/**
 * 过滤器文件
 */
let filters = {
    rateFilter(str, digit) {
        digit = digit || 2
        if (str) {
            return (parseFloat(str) * 100).toFixed(digit)
        }
    }
}

/**
 * 遍历注册
 */
let registerFilters = function () {
    for(let key of Object.keys(filters)){
        Vue.filter(key, filters[key])
    }
}

registerFilters()



