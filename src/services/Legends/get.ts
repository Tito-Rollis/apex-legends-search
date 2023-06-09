import { api, handleResponse, handleError } from '../api';
import { LegendsData } from '../../types';
import useSWR from 'swr';

async function getAllLegends(url: string) {
    let response: LegendsData[] = await api
        .get(url)
        .then((e) => handleResponse<LegendsData[]>(e))
        .catch((err) => handleError(err));
    return response;
}

export const GetAllLegendsSwr = () => useSWR('/data.json', getAllLegends);
