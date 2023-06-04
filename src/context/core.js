import { createContext } from 'react';

export const Infos = createContext({ loading: false, user: {}, percentage: 0 });
export const Habits = createContext([]);
