import axios from 'axios'
export default axios.create({
  baseURL: './',
  timeout: 5000,
})