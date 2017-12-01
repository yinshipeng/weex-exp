import storage from '../storage'
import { objectToUrlParams } from '../utils'
const stream = weex.requireModule('stream')

const baseUrl = 'http://localhost:8081/api'
let _callback;

/**
 * 设置请求对象
 * @param method
 * @param url
 * @param fn
 * @param body
 */
const config = function (method, url='', fn, body={}) {
    let requestBody = {
        headers: {
            "Content-Type": "application/json"
        },
        method: method,
        url: baseUrl + url,
        type: "json",
        body: JSON.stringify(body)
    }
    storage.getItem('token', (res)=>{
        const token = res.data
        requestBody.headers['x-auth-token'] = token
        fn(requestBody)
    })
}

/**
 * 发送请求
 * @param requestBody
 */
const sendRequest = function (requestBody) {
    stream.fetch(requestBody,(res)=>{
        handleResult(res)
    })
}

/**
 * 处理请求结果
 * @param res
 */
function handleResult (res) {
    if(res.status == 200){
        _callback(res.data)
    }else{
        /**
         * 对于异常处理，可以根据接口规范和不同平台设计不同的处理方式
         */
    }
}

export default {
    get(url, body, callback){
        _callback = callback
        url += objectToUrlParams(body)
        config('GET', url, sendRequest)
    },
    post(url, body, callback){
        _callback = callback
        config('POST', url, sendRequest, body)
    }
}