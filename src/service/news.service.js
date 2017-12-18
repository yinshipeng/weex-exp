import http from  './http'

/**
 * 读取新闻列表
 */
export function readNews () {
    const url = '/news'
    return http.get(url)
}