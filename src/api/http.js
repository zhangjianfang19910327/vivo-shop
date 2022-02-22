import axios from 'axios'
export default {
    axios_get(url, data,config) {
        let params = {params:{},headers:""}
        if(data){
            params.params=data
        }
        if(config){
            params.headers=config.headers;
        }
        return new Promise((resolove, reject) => {
            axios.get(url,params).then(res => {
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
