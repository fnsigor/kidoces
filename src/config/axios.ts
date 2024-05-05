import axios from "axios";
import { apiUrl } from "./api";

export const api = axios.create({
    baseURL: apiUrl
})