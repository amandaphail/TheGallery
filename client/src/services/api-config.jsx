import axios from 'axios';
let apiUrl
let apiUrls = {production: "https://the-gallery-mandii.herokuapp.com/", developent: "http://localhost:3000"}

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl
  
})


export default api;