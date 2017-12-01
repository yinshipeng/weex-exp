import http from  './http'

/**
 * 读取字典
 * @param param
 * @param callback
 */
export function readDict (param, callback) {
    const url = '/loanMaterial/getDirectories'
    http.post(url, param, callback)
}