import axios from 'axios';
let apiUrl
let apiUrls = {production: "https://the-gallery-mandii.herokuapp.com/", developent: "http://localhost:3000"}

if (process.env.NODE_ENV === 'production') {
  apiUrl = apiUrls.production;
} else {
  apiUrl = apiUrls.development;
}

const api = axios.create({
  baseURL: apiUrl
  
})

// const api = axios.create({
//   baseURL: "http://localhost:3000"
  
// })


export default api;