import axios from "axios";

const instance = axios.create({
    baseURL: "https://sharehubid.com/api/"
});

export default instance;