/**
 * Created by yinshipeng on 2017/12/18
 * 对系统中broadcastChannel集中管理
 */

/**
 * 系统中所有broadcastChannel的名称
 * @type {[string,string,string]}
 */
export const BROADCAST_CHANNEL_NAMES = ['PAGE_PHOTO_NOTICE', 'PAGE_MATERIAL_NOTICE', 'PAGE_IMAGE_PREVIEW_NOTICE']

/**
 * 广播消息
 * @param broadcastChannelName
 * @param message
 */
export function postMessage (broadcastChannelName, message="") {
    if(!BROADCAST_CHANNEL_NAMES.includes(broadcastChannelName)){
        throw new Error('broadcastChannel is not exist!')
    }else{
        let broadcastChannel = new BroadcastChannel(broadcastChannelName)
        broadcastChannel.postMessage(message)
    }
}

/**
 * 监听消息
 * @param broadcastChannelName
 * @param fn
 */
export function onMessage (broadcastChannelName, fn) {
    if(!BROADCAST_CHANNEL_NAMES.includes(broadcastChannelName)){
        throw new Error('broadcastChannel is not exist!')
    }else{
        let broadcastChannel = new BroadcastChannel(broadcastChannelName)
        broadcastChannel.onmessage = fn
    }
}