import axios from "axios";

export const api = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://kidoces-back.onrender.com/': 'http://localhost:8080'
})

