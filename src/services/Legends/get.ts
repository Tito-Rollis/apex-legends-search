import { api, handleResponse, handleError, Response } from '../api';
import { LegendsData } from '../types';
import useSWR from 'swr';

async function getAllLegends(url: string) {
    let response: Response<LegendsData[]> = await api
        .get(url)
        .then((e) => handleResponse<Response<LegendsData[]>>(e))
        .catch((err) => handleError(err));
    return response.data;
}

export const GetAllLegendsSwr = () => useSWR('/data.json', getAllLegends);
