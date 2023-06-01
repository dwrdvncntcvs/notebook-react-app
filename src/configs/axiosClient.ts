import axios, { Axios } from "axios";

const axiosClient = new Axios({
    baseURL: "http://localhost:3001",
    headers: {
        "Content-Type": "application/json",
    },
});

export { axiosClient };
