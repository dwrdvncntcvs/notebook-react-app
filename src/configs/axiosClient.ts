import axios, { Axios } from "axios";

const BASE_URL = "http://localhost:3001";

const axiosClient = new Axios({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export { axiosClient };
