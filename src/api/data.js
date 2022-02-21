import http from './http'

export function getData() {
    return http.axios_get('/prod-api/system/square/squareList') //模拟接口
}
export function slaveList(data) {
    return http.axios_get('/prod-api/system/slave/slaveList',data) //模拟接口
}
export function task(data,headers) {
    return http.axios_post('/prod-api/system/task',data,headers) //模拟接口
}
export function getCodeImg() {
    return http.axios_get('/prod-api/captchaImage') //模拟接口
}
export function login(data) {
    return http.axios_post('/prod-api/login',data) //模拟接口
}
export function list(data,headers) {
    return http.axios_get('/prod-api/system/task/list',data,headers) //模拟接口
}
export function getInfo(headers) {
    return http.axios_get('/prod-api/getInfo',"",headers) //模拟接口
}