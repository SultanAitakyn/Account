import axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
});

export const getUsers = () => {
    return instance.get("users").then((response) => {
        return response
    });
}
