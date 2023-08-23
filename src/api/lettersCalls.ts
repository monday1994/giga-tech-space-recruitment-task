import {axiosInstance} from '../utils/axiosInstances';
import {LETTERS_ENDPOINT} from '../config/constants';
import { AxiosResponse } from 'axios';

export const fetchLetter = (id: string): Promise<AxiosResponse> => {
    const url = LETTERS_ENDPOINT + '/' + id;
    return axiosInstance.get(url);
}