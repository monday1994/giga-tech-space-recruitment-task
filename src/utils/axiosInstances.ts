import axios, {AxiosInstance} from "axios";
import {API_HOST_URL} from '../config/constants';

export const axiosInstance: AxiosInstance = axios.create({
    baseURL: API_HOST_URL,
});
