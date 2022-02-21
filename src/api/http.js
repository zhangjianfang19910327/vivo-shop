import axios from 'axios'
export default {
    axios_get(url, data,config) {
        return new Promise((resolove, reject) => {
            axios.get(url,{params:data,headers:config.headers}).then(res => {
                resolove(res.data)
            }).catch(error=> {
                reject(error)
            })
        })
    },
    axios_post(url, data,config) {
        return new Promise((resolove, reject) => {
            axios.post(url,data,config).then(res => {
                resolove(res.data)
            }).catch(error=> {
                reject(error)
            })
        })
    }
}
