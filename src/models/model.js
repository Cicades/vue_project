import axios from 'axios'

const request = axios.create({
  baseURL: 'http://www.liulongbin.top:3005/api/',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

export default request
