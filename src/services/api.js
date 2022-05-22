import axios from "axios";
export const URL_API = import.meta.env.VITE_APP_API_URL

const user = localStorage.getItem("tech4um_user")

const token = user ? JSON.parse(user).token : null

export const api = axios.create({
    baseURL: URL_API,
    headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : null,
    }
});
