import axios from "axios";

export default axios.create({
 
  baseURL: "https://faq-api-mxvp.onrender.com/",
    // baseURL:'http://localhost:3000',
  headers: {
    "Content-type": "application/json"
    
  }
});