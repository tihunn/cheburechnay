import axios from "axios";

const $host = axios.create({
    baseURL: "http://45.67.59.147:3007/"
})


export {$host}