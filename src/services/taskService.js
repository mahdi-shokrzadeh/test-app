import axios from "axios";

const SERVER_URL = "http://localhost:9000";

export const getAllTasks = () => {
    const url = `${SERVER_URL}/tasks`;
    return axios.get(url);
};

export const getTaskById = (id) => {
    const url = `${SERVER_URL}/tasks/${id}`;
    return axios.get(url);
};

export const getAllGroups = () => {
    const url = `${SERVER_URL}/groups`;
    return axios.get(url);
};

export const getGroup = (id) => {
    const url = `${SERVER_URL}/groups/${id}`;
    return axios.get(url);
};

export const createTask = (task) => {
    const url = `${SERVER_URL}/tasks`;
    return axios.post(url, task);
};

export const updateTask = (id, task) => {
    const url = `${SERVER_URL}/tasks/${id}`;
    return axios.put(url, task);
};

export const deleteTask = (id) => {
    const url = `${SERVER_URL}/tasks/${id}`;
    return axios.delete(url);
};
