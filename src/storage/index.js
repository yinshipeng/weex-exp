import { isObject } from '../utils/index'

const storage = weex.requireModule('storage');

export default {
    setItem(key, data, callback) {
        data = isObject(data) ? JSON.stringify(data) : data
        storage.setItem(key, data, callback)
    },
    async getItem(key, callback) {
        return storage.getItem(key, callback)
    },
    removeItem(key, callback){
        storage.removeItem(key, callback)
    },
    length(callback) {
        storage.length(callback)
    },
    getAllKeys(callback) {
        storage.getAllKeys(callback)
    }
}