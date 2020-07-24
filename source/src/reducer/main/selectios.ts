import {NameSpace} from '@root/types';

export const getAppState = (state) => state[NameSpace.MAIN].appState;
export const getErrors = (state) => state[NameSpace.MAIN].errors;
