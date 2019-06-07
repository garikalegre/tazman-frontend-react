import { ActionType, StateType } from 'typesafe-actions';
import { rootReducer } from '../store/root.reducer';
import * as AuthActions from '../duck/auth/auth.action';

const Actions = { ...AuthActions };

export type RootActions = ActionType<typeof Actions>;
export type RootState = StateType<typeof rootReducer>;
