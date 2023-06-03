import { createContext } from 'react';

export const Infos = createContext({ loading: false, user: {} });

export const BASE_URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit';
