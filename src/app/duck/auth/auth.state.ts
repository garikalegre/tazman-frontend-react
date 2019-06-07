import { ActionType } from 'typesafe-actions';
import * as AuthActions from './auth.action';

export type State = {
    isLoading: boolean;
    isAuth: boolean;
    error: Error | null;
};

export type Actions = ActionType<typeof AuthActions>;

export const initialState: State = {
    isLoading: true,
    isAuth: false,
    error: null
};
