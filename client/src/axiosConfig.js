import axios from "axios";



const axiosBase = axios.create({
    baseURL: "http://localhost:4444/api"
});
export default axiosBase