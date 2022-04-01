import axios from "axios";


const ipApi = {
    getMyIp(){
        return axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_edkoCvsKrRjGk9DBD2uVoYXKZKhqi&`)
    },

    findIp(ip){
        if(/^((?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])[.]){3}(?:[0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/.test(ip)){
            return axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_edkoCvsKrRjGk9DBD2uVoYXKZKhqi&ipAddress=${ip}`)
        } else {
            return axios.get(`https://geo.ipify.org/api/v2/country,city?apiKey=at_edkoCvsKrRjGk9DBD2uVoYXKZKhqi&domain=${ip}`)
        }
        

    }
}

export default ipApi