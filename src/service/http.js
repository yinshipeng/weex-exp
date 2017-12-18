import { objectToUrlParams } from '../utils'
const stream = weex.requireModule('stream')

/**
 * API基础域名
 * @type {string}
 */
const baseUrl = 'http://192.168.21.126:3000'

/**
 * 请求参数设置
 * @param method
 * @param url
 * @param body
 * @returns {{headers: {Content-Type: string}, method: *, url: string, type: string, body}}
 */
const getRequestBody = function (method, url='', body={}) {
    let requestBody = {
        headers: {
            "Content-Type": "application/json"
        },
        method: method,
        url: baseUrl + url,
        type: "json",
        body: JSON.stringify(body)
    }
    return requestBody
}

/**
 * 发送请求并返回结果
 * Tip: 对回调函数中的请求结果可以进一步封装用于错误处理
 * @param body
 * @returns {Promise.<*>}
 */
async function sendRequest (body) {
    let result = await new Promise(function (resolve, reject) {
        stream.fetch(body,(res)=>{
            if(res.status == 200){
                resolve(res.data)
            }else {
                reject()
            }
        })
    })
    return result
}


export default {
    get(url, body){
        url += objectToUrlParams(body)
        body = getRequestBody('GET', url, body)
        return sendRequest(body)
    },
    post(url, body){
        body = getRequestBody('POST', url, body)
        return sendRequest(body)
    }
}